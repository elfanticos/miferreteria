'use strict'
var express    = require('express'),
	favicon    = require('serve-favicon'),
	bodyParser = require('body-parser'),
	morgan     = require('morgan'),
	path       = require('path'),
	faviconURL = path.join(__dirname, 'public/img', 'favicon-ferreteria.png'),
	publicDir  = express.static(`${__dirname}/public`),
	viewDir    = `${__dirname}/views`,
	port       = (process.env.PORT || 3000),
	app        = express();


//ROUTES
var r_login    = require('./routes/r_login'),
    r_main     = require('./routes/r_main');

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
	.use('/',r_login)
	.use('/',r_main)


module.exports = app;