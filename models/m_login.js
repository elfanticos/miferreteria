'use strict'

var db = require('../server');

function getDataByLogin(user,pass,response) {
	let sql = `SELECT id_persona,
					  nom_persona,
					  ape_pater_pers,
					  ape_mater_pers,
					  tipo_doc,
					  num_doc,
					  pais_nac,
					  domicilio,
					  email,
					  celular,
					  telefono 
				 FROM persona
				WHERE usuario = LOWER($1)
			      AND clave = convert_to($2, 'UTF8')`;
	sql = db.pgpromise.as.format(sql,[user, pass]);
	db.conection.query(sql)
		.then(function(data) {
			response(data);
		}).catch(function(error) {
			response(error);
		});
}
module.exports = {
	getDataByLogin
};
