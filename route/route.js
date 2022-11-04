const express = require("express")

const router = express.Router()

router.get('/', (request, response) => {
    response.status(200).json({ message: "GET success" })
})

router.post('/', (request, response) => {
    response.status(200).json({ message: "SET success" })
})

router.put('/:id', (request, response) => {
    response.status(200).json({ message: `UPDATE success ${request.params.id}` })
})


router.delete('/:id', (request, response) => {
    response.status(200).json({ message: `DELETE success ${request.params.id}` })
})

module.exports = router