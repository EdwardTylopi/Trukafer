const Trukafer = require('../models/Trukafer')

const getIndex = (req, res) => {
	Trukafer.find({}, (error, trukafers) => {
		if(error) console.error(error)
		res.render('index', {
			trukafers: trukafers
		})
	})
},
	postIndex = (req, res) => {
	const newTrukafer = new Trukafer({
		title: req.body.taskTitle
	})
	newTrukafer.save(error => {
		if(error) console.error(error)
		res.redirect('./')
	})
},
	deleteIndex = (req, res) => {
		const {taskId} = req.params
		Trukafer.findByIdAndDelete(taskId, (error) => {
			if(error) console.error(error)
			res.redirect('./')
		})
}

module.exports = {
	getIndex: getIndex,
	postIndex: postIndex,
	deleteIndex: deleteIndex
}
