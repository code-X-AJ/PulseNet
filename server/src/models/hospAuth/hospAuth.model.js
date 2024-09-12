const bcrypt = require('bcrypt')
const hospSchema = require('./hospAuth.mongo')


async function createNewHospital(info) {
    try {
        var { hname, htype, rnum, address, username, password, pincode, ohours, slinks, facilities} = info;

        var existingProfile = await hospSchema.findOne({ username })
        if(existingProfile) return { msg: "Username already used.", status: false }
        
        existingProfile = await hospSchema.findOne({ rnum })
        if(existingProfile) return { msg: "Registration Number already used.", status: false }

        else{
            let hashedPassword = await bcrypt.hash(password, 10);
            let hospProfile = await hospSchema.create({ hospitalName:hname, hospitalType:htype, registrationNumber:rnum, username, password:hashedPassword, address, pincode, facilities:facilities, operatingHours:ohours, links:slinks
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

async function fetchAllHospital() {
    try {
        const hospProfiles = await hospSchema.find().sort({createdAt:-1});
        if (hospProfiles.length==0) {
            return { msg: "No hospital registered", status: false }
        }
        else return ({ status: true, hospProfiles})
        
    } catch (error) {
        console.error(error);
    }
}

module.exports = { createNewHospital, loginHospital, fetchAllHospital }
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