
const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');
const Auth = require('./model/Auth')

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
        await Auth.create(users);
        console.log('Auth imported...'.green.inverse);
        process.exit();
    } catch (err) {
        console.log(err)
    }
}

const deleteData = async () => {
    try {
        await Auth.deleteMany();
        console.log('Auth destroy...'.red.inverse);
        process.exit();
    } catch (err) {

    }
}

if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    deleteData();
}