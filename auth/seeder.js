
const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');
const auth = require('./model/auth')

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

const users = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8')
)


const importData = async () => {
    try {
        await auth.create(users);
        console.log('auth imported...'.green.inverse);
        process.exit();
    } catch (err) {
        console.log(err)
    }
}

const deleteData = async () => {
    try {
        await auth.deleteMany();
        console.log('auth destroy...'.red.inverse);
        process.exit();
    } catch (err) {

    }
}

if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    deleteData();
}