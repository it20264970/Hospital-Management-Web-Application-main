const express = require('express');
const inventory = require('../models/inventory');
const Inventory = require('../models/inventory');

const router = express.Router();

//save inventory

router.post('/inventory/save', (req,res)=>{

    let newInventory = new Inventory(req.body);

    newInventory.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Inventory saved successfully"
        });
        
    });

});

//get inventory

router.get('/inventories',(req,res) =>{
    Inventory.find().exec((err,inventory) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingInventories:inventory
        });
    });
});


//get a specific inventory

router.get("/inventory/:id",(req,res) =>{

    let inventoryId = req.params.id;

    Inventory.findById(inventoryId,(err,inventory) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            inventory
        });
    });

});



//update inventory

router.put('/inventory/update/:id',(req,res) =>{
    Inventory.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,inventory)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            
                return res.status(200).json({
                    success:"Updated successfully"
                });
            }
        
    );
});

//delete inventory

router.delete('/inventory/delete/:id',(req,res) =>{
    Inventory.findByIdAndRemove(req.params.id).exec((err, deletedInventory) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });

        return res.json({
            message:"Delete successful",deletedInventory
        });
    });
});


module.exports = router;