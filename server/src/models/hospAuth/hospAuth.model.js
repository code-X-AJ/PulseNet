const bcrypt = require('bcrypt')
const hospSchema = require('./hospAuth.mongo')


async function createNewHospital(info) {
    try {
        var { hospitalName, hospitalType, registrationNumber, username, password, address, pincode, facilities, operatingHours, docs, links } = info;

        var existingProfile = await hospSchema.findOne({ username })
        if(existingProfile) return { msg: "Username already used.", status: false }
        
        existingProfile = await hospSchema.findOne({ registrationNumber })
        if(existingProfile) return { msg: "Registration Number already used.", status: false }

        else{
            let hashedPassword = await bcrypt.hash(password, 10);
            let hospProfile = await hospSchema.create({ hospitalName, hospitalType, registrationNumber, username, password:hashedPassword, address, pincode, facilities, operatingHours, docs, links,
            })
            delete hospProfile.password;
            return { msg: " submited successfully", status: true, hospProfile }
        }
    } catch (error) {
        console.error(error);
    }
}

async function loginHospital(info) {
    try {
        const { username, password, } = info;

        var existingProfile = await hospSchema.findOne({ username })
        if(!existingProfile) return { msg: "Incorrect Username or password", status: false }
        
        const isPasswordValid = await bcrypt.compare(password, existingProfile.password)
        if (!isPasswordValid) return ({ msg: "Incorrect username or password", status: false })

        delete existingProfile.password;
        return ({ status: true, hospital: existingProfile })
            
    } catch (error) {
        console.error(error);
    }
}

module.exports = { createNewHospital, loginHospital }
// sample profile
// {
//     "hospitalName": "Max hospital",
//     "hospitalType": "private",
//     "registrationNumber": 12345,
//     "username": "max",
//     "password": "max",
//     "address": "sector max",
//     "pincode": 13579,
//     "facilities": "ICU, OPD",
//     "operatingHours": "8:00am to 9:00pm",
//     "docs": "abc"
//   }