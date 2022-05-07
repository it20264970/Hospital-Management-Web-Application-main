const mongoose = require('mongoose');

const invSchema = new mongoose.Schema({

    pdtname:{
        type:String,
        required:true
    },
    itemNo:{
        type:String,
        required:true
    },
    rackNo:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    dateAdded:{
        type:String,
        required:true
    },
    supplier:{
        type:String,
        required:true
    },
    cost:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model('inventory', invSchema)

