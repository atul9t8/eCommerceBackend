const express = require("express");
const router = express.Router();
const registration = require("../controllers/userController");


router.post('/registration', registration)



module.exports = router