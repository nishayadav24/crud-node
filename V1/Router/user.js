const app = require('express').app();

app.get("/add",usercontroller.userAdd);
app.get("/update",usercontroller.userupdate);
app.get("/delete",usercontroller.userdelete);
app.get("/truncate",usercontroller.truncate);
app.get("/find",usercontroller.find);

module.exports = app;
