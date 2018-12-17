var express = require("express");
var router = express.Router();

var overviewController = require("../controllers/overviewController.js");

router.get("/", overviewController.get);
router.get("/restaurants/:id", overviewController.get);
router.get("/api/:id", overviewController.getRestaurant);

module.exports = router;