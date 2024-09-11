const appiontRouter = require('express').Router()
const { httpPostNewAppoint} = require('./appoint.controller')

appiontRouter.post('/newAppoint', httpPostNewAppoint);

module.exports = appiontRouter
