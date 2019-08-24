const Trukafer = require('../models/Trukafer')

const getEdit = (req, res) => {
	const {taskId} = req.params
	Trukafer.findById(taskId, (error, trukafer) => {
		if(error) console.error(error)
		res.render('edit.pug', {
			trukafer: trukafer
		})
	})
},
	putEdit = (req, res) => {
		const {taskId} = req.params,
			{taskTitle} = req.body
		Trukafer.findByIdAndUpdate(taskId, {
			title: taskTitle
		}, {
			useFindAndModify: false
		}, error => {
			if(error) console.error(error)
			res.redirect('/')
		})
}

module.exports = {
	getEdit: getEdit,
	putEdit: putEdit
}
