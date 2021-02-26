
module.exports=(sequelize,DataTypes)=>{
    const Course=sequelize.define("Course",{
        courseCode:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        Title:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        Description:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        
    },
    {
        freezeTableName:true,
        timestamps:false
    },

    

    
    
    );
    
    return Course;
}   