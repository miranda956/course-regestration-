
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
        regNo:req.body.regNo,
        f_name:req.body.f_name,
        l_name:req.body.l_name,
        email:req.body.email,
        contact:req.body.contact,
        yearOfStudy:req.body.yearOfStudy,
        pwd:req.body.pwd

    }).then((newStudent)=>{
        

    }).catch((err)=>{
        next(err)
    })

})

app.patch("",(req,res,next)=>{
    db.Student.update({

        regNo:req.body.regNo,
        f_name:req.body.f_name,
        l_name:req.body.l_name,
        email:req.body.email,
        contact:req.body.contact,
        yearOfStudy:req.body.yearOfStudy,

    }).then((editdata)=>{


    }).catch((err)=>{
        console.log(err)
    })
})

    
}

module.exports=router;
