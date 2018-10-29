var express = require('express');
var router = express.Router();

var overviewController = require('../controllers/overviewController.js');

router.get('/:id', overviewController.getRestaurant);
router.get('/*', overviewController.get);

module.exports = router;