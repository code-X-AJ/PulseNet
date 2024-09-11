const { createNewAppoint } = require('../../models/appointment/appoint.model')

async function httpPostNewAppoint(req, res) {
    console.log("at httpPostNewAppoint");
    
    try {
        const info = req.body
        const result = await createNewHospital(info);
        return res.json(result)

    } catch (err) {
        console.log(err.message)
        return res.status(400).json({ "err": err.message })
    }
}


module.exports = {
    httpPostNewAppoint,
}
