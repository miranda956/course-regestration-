

const db=require("../models");
const express=require("express");

function  router(app){


    // get all courses 
    app.get("",(req,res,next)=>{
        db.Course.findAll({})
        .then((courses)=>{

        }).catch((err)=>{
            next(err)
        })
    })



    // regestring a new course 

    app.post("",(req,res,next)=>{
        db.course.create({
            courseCode:req.body.courseCode,
            Title:req.body.title,
            Description:req.body.description
        }).then((data)=>{
            res.json(data)
            
        }).catch((err)=>{
            console.log(err)
        })
    })

    app.patch("",(req,res,next)=>{
        db.course.update({
            courseCode:req.body.courseCode,
            Title:req.body.Title,
            Description:req.body.Description
        },{
            where:{
                id:req.params.id
            }
        })
    })

    app.delete("",(req,res,next)=>{
        db.Course.Destroy({
            where:{
                id:req.params.id
            }
        }).then((data)=>{

        }).catch((err)=>{
            console.log(err)
        })
    })





    
}
module.exports=router;