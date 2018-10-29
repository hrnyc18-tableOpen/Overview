var express = require('express');
var router = express.Router();

var overviewController = require('../controllers/overviewController.js');

router.get('/overview/*', overviewController.get);
router.get('/getRestaurant', overviewController.getRestaurant);

module.exports = router;