import express from 'express'
import jwt from 'jsonwebtoken'
import { CreateErrorResponse } from '../helpers/responseHelper'
const authMiddleware = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    try {
        const authHeader = req.headers['authorization']
        // console.log(authHeader)
        const token = authHeader && authHeader?.split(' ')[1]
        if (!token) {
            return res.status(401).send('Unauthorized Access')
        }
        const tokenSecret = process.env.SECRET_KEY
        if (tokenSecret && token) {
            jwt.verify(token, tokenSecret, (err) => {
                if (err) {
                    return res.status(403).send('Unauthorized Access!')
                }
                res.locals.token = token
                next()
            })
        }
    } catch (error) {
        return res
            .status(500)
            .send(
                CreateErrorResponse(
                    'Error',
                    'Something Went Wrong!!',
                    'Something Wrong'
                )
            )
    }
}

export default authMiddleware
