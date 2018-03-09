'use strict'

var util    = require('../helpers/util_helper'),
    config  = require('../helpers/constants_helper');

function index(req,res) {
	var locals = { title : 'Bienvenidos | Login'};
	res.render('main',locals);
}

module.exports = {
	index
}