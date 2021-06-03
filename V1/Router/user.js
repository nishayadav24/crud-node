const express = require('express')
const router = express.Router();
const controller = require("../controller")

router.post("/add",controller.user.userAdd);
router.post("/update",controller.user.userupdate);
router.post("/delete",controller.user.userdelete);
router.post("/truncate",controller.user.truncate);
router.get("/find",controller.user.find);

module.exports = router;
