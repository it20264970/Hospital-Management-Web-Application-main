const express = require('express');

const Drug = require('../models/drug');

const router = express.Router();

//save drug

router.post('/drug/save', (req,res)=>{

    let newDrug = new Drug(req.body);

    newDrug.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Drug saved successfully"
        });
        
    });

});

//get drug

router.get('/drugs',(req,res) =>{
    Drug.find().exec((err,drug) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingDrugs:drug
        });
    });
});


//get a specific drug

router.get("/drug/:id",(req,res) =>{

    let drugId = req.params.id;

    Drug.findById(drugId,(err,drug) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            drug
        });
    });

});



//update drug

router.put('/drug/update/:id',(req,res) =>{
    Drug.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,drug)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            
                return res.status(200).json({
                    success:"Updated successfully"
                });
            }
        
    );
});

//delete drug

router.delete('/drug/delete/:id',(req,res) =>{
    Drug.findByIdAndRemove(req.params.id).exec((err, deletedDrug) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });

        return res.json({
            message:"Delete successful",deletedDrug
        });
    });
});


module.exports = router;