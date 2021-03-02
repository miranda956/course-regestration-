
module.exports=(sequelize,DataTypes)=>{
    const Enrollment=sequelize.define("Enrollement",{
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