const express = require('express')
const morgan = require('morgan')

const app = express()

//middlewares
app.use(morgan('dev'))
app.use(express.json)
//routes
const taskRoutes = require('./routes/task.routes')
app.use(taskRoutes)
//exportando
module.exports = app

