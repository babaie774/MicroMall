const User = require('../models/user');
const asyncHandler = require('../middleware/async');

// @desc      Get user data
// @route     GET /api/v1/getUsers
// @access    Private/Admin
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

// @desc      Get users list
// @route     GET /api/v1/getUsers
// @access    Private/Admin
exports.getUser = asyncHandler(async (req, res, next) => {
    const users = await User.findOne(rq.params.id);
    res.status(200).json({
        success: true,
        count: users.length,
        data: users
    });

    next(err => {
        res.status(500).json({ success: false, error: 'Server Error' })
    })
});

// @desc      Update user
// @route     PUT /api/v1/user
// @access    Private/Admin
exports.updateUser = asyncHandler(async (req, res, next) => {
    const user = User.findOne(req.params.id);

    if (!user) {
        res.status(404).json({
            success: false,
            data: 'User not found'
        })
    }

    const updateObj = {
        $set: update
    }

    const result = await User.findByIdAndUpdate(user._id, updateObj, {
        new: true,
        runValidators: true
    });

    res.status(201).json({
        success: true,
        data: result
    });

    next(err => {
        res.status(500).json({ success: false, error: `Error deleting user: ${err}` })
    })
});

// @desc      Delete user
// @route     DELETE /api/v1/user
// @access    Private/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
    const user = User.findByIdAndDelete(req.params.id);

    if (!user) {
        res.status(404).json({
            success: false,
            massage: 'User not found'
        })
    }

    res.status(200).json({ success: true, userId: user._id })

    next(err => {
        res.status(500).json({
            success: false,
            massage: 'Something went wrong'
        })
    })
})