const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/product';


const connectDB = async () => {
    const conn = await mongoose.connect(`${MONGO_URI}`)

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
}

module.exports = connectDB;