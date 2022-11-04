const express = require("express")

const route = require("./route/route")

const detenv = require('dotenv').config({ path: "./config/.env" })

const app = express()



//route
app.use("/api/user", route)



app.listen(process.env.PORT, () => {
    console.log(`server listening on port ${process.env.PORT}`)
})