const { createNewHospital, loginHospital } = require('../../models/hospAuth/hospAuth.model')

async function httpPostHospSignup(req, res) {
    console.log("at httpPostHospSignup");
    
    try {
        const info = req.body
        const result = await createNewHospital(info);
        return res.json(result)

    } catch (err) {
        console.log(err.message)
        return res.status(400).json({ "err": err.message })
    }
}

async function httpPostHospLogin(req, res) {
    try {
        const info = req.body
        const result = await loginHospital(info);
        console.log(result);
        return res.json(result)

    } catch (err) {
        console.log(err.message)
        return res.status(400).json({ "err": err.message })
    }
}


module.exports = {
    httpPostHospSignup,
    httpPostHospLogin,
}
