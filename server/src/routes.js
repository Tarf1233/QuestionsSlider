const express = require('express')

const routes = express.Router()

const {celebrate, Segments, Joi} = require('celebrate')

const ongController = require('./controllers/OngController')
const incidentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController')

const SessionControler = require('./controllers/SessionController')












const OpinionsController = require('./controllers/OpinionsController')

// routes.post('/opinion',celebrate({
//     [Segments.HEADERS]: Joi.object({
//         authorization: Joi.required()
//     }).unknown()
// }),OpinionsController.GetOpinionsByChronology)


// routes.post('/compareopinion',celebrate({
//     [Segments.HEADERS]: Joi.object({
//         authorization: Joi.required()
//     }).unknown()
// }),OpinionsController.GetOpinionsByChronologyForCompare)





routes.post('/opinion',OpinionsController.GetOpinionsByChronology)


routes.post('/compareopinion',OpinionsController.GetOpinionsByChronologyForCompare)











routes.post('/sessions', SessionControler.create)

routes.post('/sessions_provisoria', SessionControler.create_provisoria)

























routes.post('/ongs',celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)

    })
}), ongController.create)

routes.get('/ongs', ongController.index)

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.required()
    }).unknown()
}),ProfileController.index)

routes.post('/incidents', incidentsController.create)
routes.get('/incidents', incidentsController.index)
routes.delete('/incidents/:id', incidentsController.delete)


module.exports = routes