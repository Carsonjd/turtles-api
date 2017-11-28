const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/controller.js')

router.get('/', ctrl.sendAll)

router.get('/:id', ctrl.sendOne)

router.post('/', ctrl.sendNew)

router.put('/:id', ctrl.sendChange)

router.delete('/:id', ctrl.sendDelete)

module.exports = router
