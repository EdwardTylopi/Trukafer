const express = require('express')
const router = express.Router()

const indexController = require('../controllers/index'),
	editController = require('../controllers/edit')

router.get('/', indexController.getIndex)
router.post('/add', indexController.postIndex)
router.delete('/delete-:taskId', indexController.deleteIndex)
router.get('/edit-:taskId', editController.getEdit)
router.put('/edit-:taskId', editController.putEdit)

module.exports = router
