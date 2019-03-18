const express = require('express')
const controller = require('../controllers/students')
const router = express.Router()

router.get('/', controller.getStudents)
router.post('/', controller.createStudent)

module.exports = router