const { usercontroller } = require("../controller")
const express = require("express")
const router = express.Router();

router.get("/", usercontroller.getdata)
router.get("/puppet", usercontroller.getpage)
router.get("/send", usercontroller.send)
router.get("/kirim", usercontroller.receive)

module.exports = router