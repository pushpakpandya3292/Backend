/* eslint-disable @typescript-eslint/no-var-requires */
import nodemailer from 'nodemailer'
require('dotenv').config()

export const sendEmail = async (email: any, subject: any, text: any) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
        })

        await transporter.sendMail({
            from: process.env.EMAIL_USERNAME,
            to: email,
            subject: subject,
            html: text,
        })
        console.log('Email sent sucessfully')
    } catch (error) {
        console.log('Email not sent')
        console.log(error)
    }
}
