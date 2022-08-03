const mongoose = require('mongoose');

const dbConnection = () => {
    try {

        mongoose.connect(process.env.DB_CNN);

        console.log("db online")

    } catch (error) {
        console.log(error)
        throw new Error("Error to connect to database")
    }
}


module.exports = {
    dbConnection
}