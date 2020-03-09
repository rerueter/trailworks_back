const express = require("express");
const router = express.Router();
const controller = require("../controllers");

//______________________________________________________Register User__
router.post("/register", controller.auth.register);

//______________________________________________________________Login__
router.post("/login", controller.auth.login);

//_____________________________________________________________Logout__
router.delete("/logout", controller.auth.logout);

//_____________________________________________________________Export__
module.exports = router;
