const mongoose = require('mongoose');

const connectDB = async ({ mongoURL }) => {
    console.log("db", mongoURL)
    const conn = await mongoose.connect(mongoURL, {
        UseNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useFindAndModify: false,
        useUnifiedTopology: true
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
}

module.exports = connectDB;