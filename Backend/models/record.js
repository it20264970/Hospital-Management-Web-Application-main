const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({

    PatientID:{
        type:String,
        required:true
    },
    PatientName:{
        type:String,
        required:true
    },
    PatientType:{
        type:String,
        required:true
    },
    ReportType:{
        type:String,
        required:true
    },
    Testcode:{
        type:String,
        required:true
    },
    IssueDate:{
        type:String,
        required:true
    }

});

module.exports =mongoose.model('records',recordSchema);