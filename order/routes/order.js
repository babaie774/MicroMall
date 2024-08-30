const express = require('express');
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/order');
const advancedResults = require('../middleware/advancedResults');

const Auth = require('../models/Order')

const router = express.Router({ mergeParams: true });

router.use(protect);
router.use(authorize('admin'));

router
  .route('/')
  .get(protect, authorize('admin'), advancedResults(Auth), getUsers)
  .post(protect, authorize('admin'), createUser);

router
  .route('/:id')
  .get(getUser)
  .put(protect, authorize('admin'), updateUser)
  .delete(protect, authorize('admin'), deleteUser);

module.exports = router;
