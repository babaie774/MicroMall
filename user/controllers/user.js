const User = require('../models/User')
// @desc      Get users list
// @route     GET /api/v1/getUsers
// @access    Private/Admin
exports.getUsers = async (req, res, next) => {
    const query = { ...req.query };
    const users = await User.find(query);
    res.status(200).json({
        success: true,
        count: users.length,
        data: users
    }).catch(err => {
        res.status(500).json({ success: false, error: 'Server Error' })
    });
};

// @desc      Get user data
// @route     GET /api/v1/getUser
// @access    Private/User
// exports.getUser = asyncHandler(async (req, res, next) => {
//     res.status(200).json(res.advancedResults);
// });