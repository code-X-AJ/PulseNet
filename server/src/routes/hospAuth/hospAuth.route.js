const hospAuthRouter = require('express').Router()
const { httpPostHospSignup ,httpPostHospLogin, httpGetAllHospitals } = require('./hospAuth.controller')

hospAuthRouter.get('/allHosp', httpGetAllHospitals);
hospAuthRouter.post('/signup', httpPostHospSignup);
hospAuthRouter.post('/login', httpPostHospLogin);

module.exports = hospAuthRouter
