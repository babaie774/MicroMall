const express = require('express');
// const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const productRoutes = require('./routes/productRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Could not connect to MongoDB...', err));

// app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`Product Service is listening on port ${port}`);
});
