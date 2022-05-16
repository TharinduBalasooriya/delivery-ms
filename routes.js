let router = require("express").Router();
let diliveryController = require("./controller/dilivery.controller")

router.get("/", (req, res) => {
  res.send("Dilvery API v1");
});


router.route("/dilivery").post(diliveryController.saveDilvery);
router.route("/dilivery").get(diliveryController.getAllDiliveries);
router.route("/dilivery/:id").get(diliveryController.getDilveryById);
router.route("/dilivery/:id").delete(diliveryController.deleteDilveryById);
router.route("/dilivery/:id").put(diliveryController.updateDilveryById);
module.exports = router;