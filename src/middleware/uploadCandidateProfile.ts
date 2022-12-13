import multer from 'multer'
import path from 'path'
import fs from 'fs'

let storage
try {
    storage = multer.diskStorage({
        destination: (
            req: Express.Request,
            file: Express.Multer.File,
            callback: (error: Error | null, destination: string) => void
        ) => {
            let directoryPath: any

            if (file.fieldname === 'resume') {
                directoryPath = path.join(__dirname, '../public/resume')
            } else if (file.fieldname === 'profile') {
                directoryPath = path.join(__dirname, '../public/profile_image')
            } else if (file.fieldname === 'profile_image') {
                directoryPath = path.join(__dirname, '../public/userProfile')
            }
            if (!fs.existsSync(directoryPath)) {
                fs.mkdirSync(directoryPath, { recursive: true })
            }
            callback(null, directoryPath)
        },
        filename: (
            req: Express.Request,
            file: Express.Multer.File,
            callback: (errror: Error | null, destination: string) => void
        ) => {
            if (file.originalname) {
                const extension: Array<string> = file.originalname.split('.')
                callback(
                    null,
                    `${Date.now()}.${extension[extension.length - 1]}`
                )
            }
        },
    })
} catch (err) {
    console.log('****ERROR****', err)
}
export const uploadData = multer({
    storage,
})
