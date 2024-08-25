const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const user = require('./routes/user');

dotenv.config();

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();
const port = process.env.PORT || 3003;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use('/', user);

app.listen(port, () => {
    console.log(`User Service is listening on port ${port}`);
});
