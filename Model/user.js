const { DataTypes} = require( 'sequelize');
const sequelize = require( '../Connection/sequelize');

const user =  sequelize.define('user', {
    Userid: {
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
})

module.exports = user;