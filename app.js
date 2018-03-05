'use strict'
var express    = require('express'),
	favicon    = require('serve-favicon'),
	bodyParser = require('body-parser'),
	morgan     = require('morgan'),
	routes     = require('./routes/r_login'),
	path       = require('path'),
	faviconURL = path.join(__dirname, 'public/img', 'favicon-ferreteria.png'),
	publicDir  = express.static(`${__dirname}/public`),
	viewDir    = `${__dirname}/views`,
	port       = (process.env.PORT || 3000),
	app        = express();

app
	.set('views',viewDir)
	.set('view engine','pug')
	.set('port',port)
	.use(favicon(faviconURL))
	//parse application/json
	.use(bodyParser.json())
	//parse application/x-www-form-urlencoded
	.use(bodyParser.urlencoded({extended : false}))
	.use(publicDir)
	.use(morgan('dev'))
	.use('/',routes);

module.exports = app;