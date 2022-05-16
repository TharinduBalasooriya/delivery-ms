let router = require("express").Router();
let diliveryController = require("./controller/dilivery.controller")

router.get("/", (req, res) => {
  res.send("Delivery API v1");
});


router.route("/delivery").post(diliveryController.saveDilvery);
router.route("/delivery").get(diliveryController.getAllDiliveries);
router.route("/delivery/:id").get(diliveryController.getDilveryById);
router.route("/delivery/:id").delete(diliveryController.deleteDilveryById);
router.route("/delivery/:id").put(diliveryController.updateDilveryById);
module.exports = router;