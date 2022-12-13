import express from 'express'
import {
    login,
} from '../controller/user.controller'
import authMiddleware from '../middleware/jwt'
import { uploadData } from '../middleware/uploadCandidateProfile'
import { upload } from '../middleware/uploadMiddleware'


const UserRouter = express.Router()

UserRouter.post('/login', login) //user login


export default UserRouter
