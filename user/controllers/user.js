const User = require('../models/user');
const asyncHandler = require('../middleware/async');
const { getUsers } = require('../service/user');
// @desc      Get users list
// @route     GET /api/v1/getUsers
// @access    Private/Admin
exports.getUser = asyncHandler(async (req, res, next) => {
    const query = { ...req.query };
    const users = await getUsers(query);
    res.status(200).json({
        success: true,
        count: users.length,
        data: users
    });

    next(err => {
        res.status(500).json({ success: false, error: 'Server Error' })
    })
});

// @desc      Get user data
// @route     GET /api/v1/getUser
// @access    Private/User
exports.getUsers = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

// @desc      Create user
// @route     POST /api/v1/users
// @access    Private/Admin
exports.createUser = asyncHandler(async (req, res, next) => {
    const user = await User.create(req.body);
  
    res.status(201).json({
      success: true,
      data: user
    });
  });