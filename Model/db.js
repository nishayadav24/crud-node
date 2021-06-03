const sequelize = require('../Connection/sequelize');
const model  =require( './index');

sequelize.sync()
.then(res => {
    console.log('Yes Sync');
}).catch(err => {
    console.log(err);
})

module.exports = sequelize;

