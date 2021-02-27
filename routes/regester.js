

const db=require("../models");
const express=require("express");

function  router(app){

    app.post("",(req,res,next)=>{
        db.Regester.create({
            staffNo:req.body.regNo,
            f_name:req.body.f_name,
            l_name:req.body.l_name,
            email:req.body.email,
            contact:req.body.contact,
            pwd:req.body.pwd
    
        }).then((newregeter)=>{
            
    
        }).catch((err)=>{
            next(err)
        })
    
    })
    
    app.patch("",(req,res,next)=>{
        db.Regester.update({
    
            staffNo:req.body.regNo,
            f_name:req.body.f_name,
            l_name:req.body.l_name,
            email:req.body.email,
            contact:req.body.contact,
    
        }).then((editdata)=>{
    
    
        }).catch((err)=>{
            console.log(err)
        })
    })
    
        
    }
module.exports=router;


    
