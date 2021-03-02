
module.exports=(sequelize,DataTypes)=>{
    const Enrollment=sequelize.define("Enrollment",{
        isApproved:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            required:true,
            default:false
        },
        
    },
    {
        freezeTableName:true,
        timestamps:false
    },


    );
    
    return Enrollment;
}   