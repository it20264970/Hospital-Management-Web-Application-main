const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({

    patientName:{
        type:String,
        required:true
    },
    patientNIC:{
        type:String,
        required:true
    },
    roomType:{
        type:String,
        required:true
    },
    roomId:{
        type:String,
        required:true
    },
    bedId:{
        type:String,
        required:true
    }
  
});

module.exports =mongoose.model('Rooms',roomSchema);