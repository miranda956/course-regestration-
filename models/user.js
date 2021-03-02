
module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define("User",{
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        }
    });
    return User;

}

