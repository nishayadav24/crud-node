const { Sequelize } =require( 'sequelize');

 const sequalize = new Sequelize(process.env.database, process.env.user, process.env.password, {
    dialect: "mysql",
    host: process.env.localhost
})
module.exports= sequalize;

