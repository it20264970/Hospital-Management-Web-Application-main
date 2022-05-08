const express = require('express');
const { status } = require('express/lib/response');
const res = require('express/lib/response');
const Payments = require('../models/payment');

const router  = express.Router();

//save payments

router.post('/payment/save',(req,res)=>{

    let newPayment = new Payments(req.body);

    newPayment.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Payment saved successfully"
        });

    });

});

//get payments

router.get('/payments',(req,res) =>{
    Payments.find().exec((err,payments) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPayments:payments
        });
    });
});

//get a specific payment

router.get("/payment/:id",(req,res) =>{

    let paymentId = req.params.id;

    Payments.findById(paymentId,(err,payment) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            payment
        });
    });

});

// update payments

router.put('/payment/update/:id',(req,res) =>{
    Payments.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,payment)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//delete payment

router.delete('/payment/delete/:id',(req,res) =>{
    Payments.findByIdAndRemove(req.params.id).exec((err,deletedPayment) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessfull",err
        });

        return res.json({
            message:"Deleted Successfull",deletedPayment
        });
    });
});


module.exports = router;