const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    patientName:{
        type:String,
        required:true
    },
    patientNIC:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    registrationNo:{
        type:String,
        required:true
    },
    mobileNo:{
        type:String,
        required:true
    }

});

module.exports =mongoose.model('Posts',postSchema);