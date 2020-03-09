const express = require("express");
const router = express.Router();
const controller = require("../controllers");

//_____________________________________________________________Create__
router.post("/works", controller.work.create);

//______________________________________________________________Index__
router.get("/works", controller.work.index);

//_______________________________________________________________Show__
router.get("/works/:id", controller.work.show);

//_____________________________________________________________Update__
router.put("/works/:id", controller.work.update);

//____________________________________________________________Exports__
module.exports = router;
