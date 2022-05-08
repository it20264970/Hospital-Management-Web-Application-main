const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({

    SalaryID:{
        type:String,
        required:true
    },
    OT:{
        type:String,
        required:true
    },
    BasicSalary:{
        type:String,
        required:true
    },
    Allowance:{
        type:String,
        required:true
    },
    ProvideFund:{
        type:String,
        required:true
    },
    NetSalary:{
        type:String,
        required:true
    }

});

module.exports =mongoose.model('payments',paymentSchema);