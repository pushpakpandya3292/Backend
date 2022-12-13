import { AppDataSource } from './data-source'
import express from 'express'
import cors from 'cors'
import mainRouter from './routes/index'
import http from 'http'
import fs from 'fs'
import swaggerUi from 'swagger-ui-express'

import dotenv from "dotenv"
dotenv.config()

AppDataSource.initialize()
    .then(async () => {
        console.log('Connected To Postgress')

        const app = express()
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))
        app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader(
                'Access-Control-Allow-Methods',
                'GET, POST, OPTIONS, PUT, PATCH, DELETE'
            )
            res.setHeader(
                'Access-Control-Allow-Headers',
                'X-Requested-With,content-type'
            )
            res.setHeader('Access-Control-Allow-Credentials', true as any)
            next()
        })
        app.use(cors())
        app.use(express.json())
        app.use(express.static('public'))

        app.use(
            '/api-docs',
            swaggerUi.serve,
            swaggerUi.setup(undefined, {
                swaggerOptions: {
                    url: '/swagger.json',
                },
            })
        )

        app.get('/', (req, res) => {
            res.json({ message: 'Welcome to Covrzy backend.' })
        })
        app.use('/', mainRouter)
        app.use(express.static(__dirname + '/'))

        const options: any = {
            //key: fs.readFileSync('private.key'),
            //cert: fs.readFileSync('certificate.crt'),
            //ca: [fs.readFileSync('ca_bundle.crt')],
            requestCert: false,
            rejectUnauthorized: false,
        }

        const server = http.createServer(options, app)
        server.listen(process.env.APP_PORT || 8080, () => {
            console.log(`Now running on port ${process.env.APP_PORT}`)
        })

    })
    .catch((error) => console.log(error))