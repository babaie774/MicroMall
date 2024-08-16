// @desc      Get single user
// @route     GET /api/v1/users/:id
// @access    Private/Admin
exports.getProfile = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

// @desc      Get single user
// @route     GET /api/v1/users/:id
// @access    Private/Admin
exports.getUser = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);
  
    if(!user){
      return next(new ErrorResponse(`No user with the id of ${req.params.id}`, 404));
    }
  
    res.status(200).json({
      success: true,
      data: user
    });
  });