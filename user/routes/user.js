const express = require('express');
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/user');
const advancedResults = require('../middleware/advancedResults');

const User = require('../models/user')

const router = express.Router({ mergeParams: true });

// router.use(protect);
// router.use(authorize('admin'));

router.route('/user').get(advancedResults(User), getUsers).post(createUser)
router.route('/user/:id').get(getUser).put(updateUser).delete(deleteUser)

module.exports = router;
