const auth = require('../models/auth');
const asyncHandler = require('../middleware/async');

// @desc      Get auth data
// @route     GET /api/v1/getAuths
// @access    Private/Admin
exports.getAuths = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

// @desc      Create auth
// @route     POST /api/v1/users
// @access    Private/Admin
exports.createAuth = asyncHandler(async (req, res, next) => {
    const auth = await auth.create(req.body);

    res.status(201).json({
        success: true,
        data: auth
    });
});

// @desc      Get users list
// @route     GET /api/v1/getAuths
// @access    Private/Admin
exports.getAuth = asyncHandler(async (req, res, next) => {
    const users = await auth.findOne(rq.params.id);
    res.status(200).json({
        success: true,
        count: users.length,
        data: users
    });

    next(err => {
        res.status(500).json({ success: false, error: 'Server Error' })
    })
});

// @desc      Update auth
// @route     PUT /api/v1/auth
// @access    Private/Admin
exports.updateAuth = asyncHandler(async (req, res, next) => {
    const auth = auth.findOne(req.params.id);

    if (!auth) {
        res.status(404).json({
            success: false,
            data: 'auth not found'
        })
    }

    const updateObj = {
        $set: update
    }

    const result = await auth.findByIdAndUpdate(auth._id, updateObj, {
        new: true,
        runValidators: true
    });

    res.status(201).json({
        success: true,
        data: result
    });

    next(err => {
        res.status(500).json({ success: false, error: `Error deleting auth: ${err}` })
    })
});

// @desc      Delete auth
// @route     DELETE /api/v1/auth
// @access    Private/Admin
exports.deleteAuth = asyncHandler(async (req, res, next) => {
    const auth = auth.findByIdAndDelete(req.params.id);

    if (!auth) {
        res.status(404).json({
            success: false,
            massage: 'auth not found'
        })
    }

    res.status(200).json({ success: true, userId: auth._id })

    next(err => {
        res.status(500).json({
            success: false,
            massage: 'Something went wrong'
        })
    })
})