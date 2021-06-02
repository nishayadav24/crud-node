const {sequelize} = require('../Connection/sequelize');
const { model } =require( './index');

sequelize.sync({ force: false }).then(res => {
    console.log('Yes Sync');
}).catch(err => {
    console.log(err);
})

module.export = sequelize;

