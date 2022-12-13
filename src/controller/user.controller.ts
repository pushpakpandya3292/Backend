import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { CreateErrorResponse, CreateSuccessResponse } from '../helpers/responseHelper';
import { writeErrorLog } from '../helpers/error_log';
import { AppDataSource } from '../data-source';
import { User } from '../entity/users';



const UserRepository = AppDataSource.getRepository(User);

/**
 * register user
 */
export const register = async (req: Request, res: Response) => {
    try {
        const newUser = req.body
        const salt = bcrypt.genSaltSync(10)
        const hashedPwd = bcrypt.hashSync(req.body.password, salt)
        newUser.password = hashedPwd
        const UserData = await UserRepository.save(newUser)
        return res
            .status(200)
            .send(
                CreateSuccessResponse(
                    `User with email ${newUser.email} is registered successfully`,
                    UserData
                )
            )
    } catch (error) {
        const errorlog = {
            cameFrom: 'register',
            data: error,
        }
        writeErrorLog(errorlog)
        return res
            .status(500)
            .json(
                CreateErrorResponse(
                    'Error',
                    `${error}`,
                    'Something Went Wrong!!'
                )
            )
    }
}

/**
 * login user
 */

export const login = async (req: Request, res: Response) => {
    try {
        const userData = UserRepository.createQueryBuilder('User')
        userData.where('User.email = :email', {
            email: req.body.email,
        })

        const newUserData = await userData.getOne()

        if (newUserData == null) {
            return res
                .status(400)
                .send(
                    CreateErrorResponse(
                        'Error',
                        `Login failed!! Please enter correct email`,
                        'Invalid Email!'
                    )
                )
        }
        if (newUserData) {
            const userCompanyId = await UserRepository.createQueryBuilder()
                .where('id = :userid', { userid: newUserData.id })
                .select(['company_id'])
                .getRawOne()

            const validUser = bcrypt.compareSync(
                req.body.password,
                newUserData.password
            )
            const token = jwt.sign(
                {
                    id: newUserData.id?.toString(),
                    email: newUserData.email,
                    company_id: userCompanyId.company_id?.toString()
                },
                process.env.SECRET_KEY,
                {
                    expiresIn: '2 days',
                }
            )

            newUserData['token'] = token
            delete newUserData['password']
            if (validUser) {
                const user_IsActive = newUserData.is_active

                if (user_IsActive == false) {
                    return res
                        .status(400)
                        .send(
                            CreateErrorResponse(
                                'Error',
                                `Account does not exists !`,
                                'account not exists'
                            )
                        )
                }
                //                newUserData.company_id = userCompanyId.company_id
                return res
                    .status(200)
                    .send(
                        CreateSuccessResponse(
                            `Welcome to Covrzy!`,
                            newUserData
                        )
                    )
            }
            if (!validUser) {
                return res
                    .status(400)
                    .send(
                        CreateErrorResponse(
                            'Error',
                            'Login failed!! Please enter correct password and email',
                            'Invalid Credentials'
                        )
                    )
            }
        }
    } catch (error) {
        const errorlog = {
            cameFrom: 'login',
            data: error,
        }
        writeErrorLog(errorlog)
        return res
            .status(500)
            .json(
                CreateErrorResponse(
                    'Error',
                    `${error}`,
                    'Something Went Wrong!!'
                )
            )
    }
}