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

//__________________________________________________________Join Work__
router.put("/works/:id/attendees", controller.work.join);

//_________________________________________________________Leave Work__
router.delete("/works/:id/attendees/:attid", controller.work.leave);

//_______________________________________________________Destroy Work__
router.delete("/works/:id", controller.work.destroy);

//____________________________________________________________Exports__
module.exports = router;
