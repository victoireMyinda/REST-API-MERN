const express = require("express")
const { createUser, updateUser, findUser, deleteUser } = require("../controller/userController")

const router = express.Router()

router.get('/', createUser).post('/', findUser)
router.put('/:id', updateUser).delete('/:id', deleteUser)



module.exports = router