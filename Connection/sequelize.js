const { Sequelize } =require( 'sequelize');
const sequalize = new Sequelize(process.env.database, process.env.user, process.env.password, {
    dialect: process.env.dialect,
    host: process.env.host
})
module.exports= sequalize;