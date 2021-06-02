const app = require('express').route();

route.get("/add",usercontroller.userAdd);
route.get("/update",usercontroller.userupdate);
route.get("/delete",usercontroller.userdelete);
route.get("/truncate",usercontroller.truncate);
route.get("/find",usercontroller.find);

module.exports = route;
