const mongoose = require("mongoose")

const appointSchema = new mongoose.Schema({
    name:{
        type:String,
    },    
    
    age :{
        type:Number,
    },    
    
    email:{
        type:String,
        required:true,
    },   

    address:{
        type:String,
    },    
    
    phone:{
        type:Number,
        required: true
    },  

    hospId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },

    
    date: {
        type: String,
        required: true
    },
    
    time: {
        type: String,
        required: true
    },

    createdAt:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model("appointments", appointSchema);