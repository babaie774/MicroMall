const express = require('express');
// const mongoose = require('mongoose');
const dotenv = require('dotenv');
const order = require('./routes/order');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Could not connect to MongoDB...', err));

app.use('/', order);

app.listen(port, () => {
    console.log(`Order Service is listening on port ${port}`);
});
