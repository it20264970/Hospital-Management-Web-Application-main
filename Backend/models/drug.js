const mongoose = require('mongoose');

const drgSchema = new mongoose.Schema({

    drgname:{
        type:String,
        required:true
    },
    drgtype:{
        type:String,
        required:true
    },
    unit:{
        type:String,
        required:true
    },
    qnt:{
        type:String,
        required:true
    },
    exp:{
        type:String,
        required:true
    },
    sup:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }


});

module.exports = mongoose.model('drug', drgSchema)
