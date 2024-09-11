const mongoose = require("mongoose")

const hospSchema = new mongoose.Schema({
    hospitalName:{
        type:String,
        required:true,
    },    
    
    hospitalType :{
        type:String,
        required:true,
    },    
    
    registrationNumber:{
        type:Number,
        required: true
    },  
    
    username:{
        type:String,
        required:true,
    },   

    password:{
        type:String,
        required: true
    },    

    address:{
        type:String,
        required:true,
    },    
    
    pincode:{
        type:Number,
        required: true
    },  

    facilities:{
        type:String,
        required:true,
    },    

    operatingHours:{
        type:String,
        required:true,
    },
    
    docs: {
        type: String,
        default: "",
        required: true
    },    
    
    links:{
        type:String,
    },    

    createdAt:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model("hosptial", hospSchema);