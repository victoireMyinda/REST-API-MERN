const express = require("express")
const controller = require("../controller/userController")

const router = express.Router()

router.get('/', controller.create)

router.post('/', controller.find)

router.put('/:id', controller.update)

router.delete('/:id', controller.delete)

module.exports = router