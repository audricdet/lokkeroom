import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './src/api/index.mjs'

const app = express()

app.use(bodyParser.json())

app.use('/api', userRouter)

app.listen(3000) 