const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
        UseNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useFindAndModify: false,
        useUnifiedTopology: true
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
}

module.exports = connectDB;