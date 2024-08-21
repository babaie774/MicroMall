// @desc      Get user profile
// @route     GET /api/v1/getProfile
// @access    Private/User
exports.getProfile = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});