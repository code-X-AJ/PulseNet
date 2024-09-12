const { createNewHospital, loginHospital, fetchAllHospital } = require('../../models/hospAuth/hospAuth.model')

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
    console.log("at httpPostHospLogin");

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

async function httpGetAllHospitals(req, res) {
    console.log("at httpGetAllHospitals");
    
    try {
        const result = await fetchAllHospital();
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
    httpGetAllHospitals
}
