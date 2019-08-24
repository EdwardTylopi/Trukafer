const mongoose = require('mongoose')

const schemaTrukafer = new mongoose.Schema({
	title: {
		type: String,
		required: true
	}
})

// trukafers
module.exports = mongoose.model('trukafer', schemaTrukafer)
