const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        if (connectDB) {
            const conn = await mongoose.connect(process.env.MONGO_URL)
            console.log(`connectDB success ${conn.connection.host}`)
        } else {
            console.log("connexion echouée")
        }

    } catch (error) {
        console.log(error)
        process.exit(1)

    }


}

module.exports = connectDB