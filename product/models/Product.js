// product-service/models/productModel.js
const mongoose = require('mongoose');

// Define the schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price must be a positive number']
  },
  stock: {
    type: Number,
    required: true,
    min: [0, 'Stock must be a positive number']
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  images: [{
    type: String,
    trim: true
  }],
  attributes: {
    type: Map,
    of: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Middleware to update `updatedAt` field on save
productSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create the model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
