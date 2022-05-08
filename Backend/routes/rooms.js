const express = require('express');
const { status } = require('express/lib/response');
const res = require('express/lib/response');
const Rooms = require('../models/rooms');

const router  = express.Router();

//save rooms

router.post('/room/save',(req,res)=>{

    let newRoom = new Rooms(req.body);

    newRoom.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Room saved successfully"
        });

    });

});

//get rooms

router.get('/rooms',(req,res) =>{
    Rooms.find().exec((err,rooms) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingRooms:rooms
        });
    });
});

//get a specific room

router.get("/room/:id",(req,res) =>{

    let roomId = req.params.id;

    Rooms.findById(roomId,(err,room) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            room
        });
    });

});

// update rooms

router.put('/room/update/:id',(req,res) =>{
    Rooms.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,room)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//delete room

router.delete('/room/delete/:id',(req,res) =>{
    Rooms.findByIdAndRemove(req.params.id).exec((err,deletedRoom) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessfull",err
        });

        return res.json({
            message:"Deleted Successfull",deletedRoom
        });
    });
});


module.exports = router;