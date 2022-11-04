const express = require("express")

const detenv = require('dotenv').config({ path: "./config/.env" })

const app = express()

app.get("/", (request, response) => {
    response.send("Welcome")
})



app.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT}`)
})