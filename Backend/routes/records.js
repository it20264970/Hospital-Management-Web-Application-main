const express = require('express');
const { status } = require('express/lib/response');
const res = require('express/lib/response');
const Records = require('../models/record');

const router  = express.Router();

//save records

router.post('/record/save',(req,res)=>{

    let newRecord = new Records(req.body);

    newRecord.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:" Record saved successfully"
        });

    });

});

//get records

router.get('/records',(req,res) =>{
    Records.find().exec((err,records) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingRecords:records
        });
    });
});

//get a specific records

router.get("/record/:id",(req,res) =>{

    let recordId = req.params.id;

    Records.findById(recordId,(err,record) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            record
        });
    });

});

// update record

router.put('/record/update/:id',(req,res) =>{
    Records.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,record)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Record Updated Successfully"
            });
        }
    );
});

//delete record

router.delete('/record/delete/:id',(req,res) =>{
    Records.findByIdAndRemove(req.params.id).exec((err,deletedRecord) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessfull",err
        });

        return res.json({
            message:"Record deleted Successfull",deletedRecord
        });
    });
});


module.exports = router;