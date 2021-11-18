const {testing} = require ("../controller")
const express = require("express")
const router = express.Router();

router.get("/", testing.tes)

module.exports = router