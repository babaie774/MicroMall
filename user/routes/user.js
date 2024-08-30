const express = require('express');
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/user');
const advancedResults = require('../middleware/advancedResults');

const User = require('../models/user')

const router = express.Router({ mergeParams: true });

router.use(protect);
router.use(authorize('admin'));

router
  .route('/')
  .get(protect,authorize('admin'),advancedResults(User), getUsers)
  .post(protect,authorize('admin'),createUser);

router
  .route('/:id')
  .get(getUser)
  .put(protect,authorize('admin'),updateUser)
  .delete(protect,authorize('admin'),deleteUser);

module.exports = router;
