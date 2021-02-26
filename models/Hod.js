
const bcrypt =require("bcrypt");

module.exports=(sequelize,DataTypes)=>{
    const Hod=sequelize.define("Hod",{
        staffNo:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        f_name:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        l_name:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        contact:{
            type:DataTypes.INTEGER,
            required:true,
            allowNull:false,
            validate:{
                len:[10]
            }
        
        
        },  
        pwd:{
            type:DataTypes.STRING,
            allowNull:false,
                required:true
        },
        
    },
    {
        freezeTableName:true,
        timestamps:false
    },

    {
    instanceMethods:{
        genereteHash(pwd){
            return bcrypt.hashSync(pwd,bcrypt.genSaltSync(8));
        },
        validpassword(pwd){
            return bcrypt.compare(pwd,this.pwd)
        }
    }    
    }
    
    );
    Hod.associate=(models)=>{
        Hod.hasMany(models.Course,{
            foreignkey:{
                allowNull:false
            }
        })
       
    }
    return Hod;
}   