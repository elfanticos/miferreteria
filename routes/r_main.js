'use strict'

var express    = require('express'),
	router     = express.Router(),
    controller = require('../controllers/c_main.js');

router
	.get('/main',controller.index)
	// .use(error404);

module.exports = router;