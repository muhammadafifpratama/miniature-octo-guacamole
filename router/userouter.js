const { usercontroller } = require("../controller")
const express = require("express")
const router = express.Router();

router.get("/", usercontroller.getdata)
router.get("/puppet", usercontroller.getpage)

module.exports = router