// const express = require('express');
// const {
//   getUsers,
//   getUser,
//   createUser,
//   updateUser,
//   deleteUser
// } = require('../controllers/users');

// const User = require('../models/User');

// const router = express.Router({ mergeParams: true });

// const advancedResults = require('../middleware/advancedResults');
// const { protect, authorize } = require('../middleware/auth');

// router.use(protect);
// router.use(authorize('admin'));

// router
//   .route('/')
//   .get(advancedResults(User), getUsers)
//   .post(createUser);

// router
//   .route('/:id')
//   .get(getUser)
//   .put(updateUser)
//   .delete(deleteUser);

// module.exports = router;


const express = require('express');
const { getUsers } = require('../controllers/user');

// const User = require('../models/User')

const router = express.Router({ mergeParams: true });

// @desc Get users
// @route GET /users
// @access private
router.route('/getUsers').get(getUsers)

// @desc Get user (JWT protected)
// @route GET /user
// @access private
// router.route('/getUser/:id').get(getUser)

module.exports = router;
