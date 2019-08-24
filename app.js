const express = require('express'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	mongoose = require('mongoose'),
	port = process.env.PORT || 3000

mongoose.connect('mongodb+srv://EdwardT:24e06t1998@trukafer-traoj.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true})
	.then(() => {
		console.log('Connecté à la base de données')
	})
	.catch(error => console.error(error))

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'))

app.set('view engine', 'pug')

const indexRoute = require('./routes/index')
app.use('/', indexRoute)

app.listen(port, () => console.log(`Serveur lancé sur le port ${port}`))
