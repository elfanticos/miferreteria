'use strict'

var m_login = require('../models/m_login'),
    util    = require('../helpers/util_helper');

function index(req,res) {
	var locals = { title : 'Bienvenidos | Login'};
	res.render('index', locals);
}

function validarLogin(req,res) {
	let user = (req.body.user == '') ? null : util.__getText(req.body.user).toLowerCase(),
	    pass = req.body.pass;

	let promise = new Promise((resolve,reject) => {
		m_login.getDataByLogin(user,pass, (response) => {
			return (response.message) ? reject(response) : resolve(response);
		});
	});

	promise
		.then((resolved,rejected) => {
			if(resolved.length > 0) {
				console.log('lleno');
			}else {
				res.send({error : 1 , msj : 'Usuario o contraseña incorrecta.'});
			}
    	})
    	.catch((err) => {
    		console.log(err);
    	})
}

module.exports = {
	index,
	validarLogin
};