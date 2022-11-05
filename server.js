const express = require("express")

const route = require("./route/route")

const connectDB = require("./database/connexion")

const detenv = require('dotenv').config({ path: "./config/.env" })

const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//route
app.use("/api/user", route)



app.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT}`)
})