const appointSchema = require('./appoint.mongo')


async function createNewAppoint(info) {
    try {
        var { name, age, email, address, phone, date, time , hospId } = info;
        let appoint = await appointSchema.create({
            name, age, email, address, phone, date, time,
        })
        return { msg: " submited successfully", status: true, hospProfile }
    } catch (error) {
        console.error(error);
    }
}


module.exports = { createNewAppoint}