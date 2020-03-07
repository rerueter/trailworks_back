const express = require("express");
const router = express.Router();
const controller = require("../controllers");

//________________________________________________________Index Users__

router.get("/users", controller.user.indexUsers);

//____________________________________________________________Exports__
module.exports = router;
