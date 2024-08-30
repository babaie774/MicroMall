const express = require('express');
const { getAuths, getAuth, createAuth, updateAuth, deleteAuth } = require('../controllers/auth');
const advancedResults = require('../middleware/advancedResults');

const auth = require('../models/auth')

const router = express.Router({ mergeParams: true });

router.use(protect);
router.use(authorize('admin'));

router
  .route('/')
  .get(protect, authorize('admin'), advancedResults(auth), getAuths)
  .post(protect, authorize('admin'), createAuth);

router
  .route('/:id')
  .get(getAuth)
  .put(protect, authorize('admin'), updateAuth)
  .delete(protect, authorize('admin'), deleteAuth);

module.exports = router;
