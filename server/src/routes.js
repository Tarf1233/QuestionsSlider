const express = require('express')

const routes = express.Router()

const {celebrate, Segments, Joi} = require('celebrate')


const SendMailController = require('./controllers/SendMailController')





routes.post('/sendmail',SendMailController.SendMail)


module.exports = routes