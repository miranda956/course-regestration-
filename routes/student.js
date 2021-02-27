
const db=require("../models");
const express=require("express");

function  router(app){


app.get("",(req,res,next)=>{
    db.Student.findAll({})
    .then((students)=>{

    }).catch((err)=>{
        next(err)
    })
})

app.post("",(req,res,next)=>{
    db.Student.create({
        
    })
})

    
}

module.exports=router;
