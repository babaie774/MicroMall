const express = require('express');
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product');
const advancedResults = require('../middleware/advancedResults');

const Product = require('../models/Product');
const { protect, authorize } = require('../middleware/auth')

const router = express.Router({ mergeParams: true });

router.use(protect);
router.use(authorize('admin'));

router
  .route('/')
  .get(protect, authorize('admin'), advancedResults(Product), getProducts)
  .post(protect, authorize('admin'), createProduct);

router
  .route('/:id')
  .get(getProduct)
  .put(protect, authorize('admin'), updateProduct)
  .delete(protect, authorize('admin'), deleteProduct);

module.exports = router;
