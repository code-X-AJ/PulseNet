const hospAuthRouter = require('express').Router()
const { httpPostHospSignup ,httpPostHospLogin } = require('./hospAuth.controller')

hospAuthRouter.post('/signup', httpPostHospSignup);
hospAuthRouter.post('/login', httpPostHospLogin);

module.exports = hospAuthRouter
