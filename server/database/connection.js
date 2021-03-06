const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected ${connect.connection.host}`)

    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;