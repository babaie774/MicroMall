const Auth = require('../models/Order');
const asyncHandler = require('../middleware/async');

// @desc      Get order data
// @route     GET /api/v1/getUsers
// @access    Private/Admin
exports.getUsers = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

// @desc      Create order
// @route     POST /api/v1/users
// @access    Private/Admin
exports.createUser = asyncHandler(async (req, res, next) => {
    const order = await Auth.create(req.body);

    res.status(201).json({
        success: true,
        data: order
    });
});

// @desc      Get users list
// @route     GET /api/v1/getUsers
// @access    Private/Admin
exports.getUser = asyncHandler(async (req, res, next) => {
    const users = await Auth.findOne(rq.params.id);
    res.status(200).json({
        success: true,
        count: users.length,
        data: users
    });

    next(err => {
        res.status(500).json({ success: false, error: 'Server Error' })
    })
});

// @desc      Update order
// @route     PUT /api/v1/order
// @access    Private/Admin
exports.updateUser = asyncHandler(async (req, res, next) => {
    const order = Auth.findOne(req.params.id);

    if (!order) {
        res.status(404).json({
            success: false,
            data: 'Auth not found'
        })
    }

    const updateObj = {
        $set: update
    }

    const result = await Auth.findByIdAndUpdate(order._id, updateObj, {
        new: true,
        runValidators: true
    });

    res.status(201).json({
        success: true,
        data: result
    });

    next(err => {
        res.status(500).json({ success: false, error: `Error deleting order: ${err}` })
    })
});

// @desc      Delete order
// @route     DELETE /api/v1/order
// @access    Private/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
    const order = Auth.findByIdAndDelete(req.params.id);

    if (!order) {
        res.status(404).json({
            success: false,
            massage: 'Auth not found'
        })
    }

    res.status(200).json({ success: true, userId: order._id })

    next(err => {
        res.status(500).json({
            success: false,
            massage: 'Something went wrong'
        })
    })
})