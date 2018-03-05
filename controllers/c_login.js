'use strict'

// var m_movie = require('../models/m_movie');
var util = require('../helpers/util_helper');

function index(req,res) {
	var locals = { title : 'Bienvenidos | Login'};
	res.render('index', locals);
}

function validarLogin(req,res) {
	let user = (req.body.user == '') ? null : util.__getText(req.body.user).toLowerCase(),
	    pass = req.body.pass;
}

module.exports = {
	index,
	validarLogin
};