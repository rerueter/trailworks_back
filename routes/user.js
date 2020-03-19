const express = require("express");
const router = express.Router();
const controller = require("../controllers");

//________________________________________COMMENT ME OUT__Index Users__
router.get("/users", controller.user.indexUsers);

router.get("/users/:id", controller.user.showUser);

router.put("/users/:id", controller.user.updateUser);

//____________________________________________________________Exports__
module.exports = router;
