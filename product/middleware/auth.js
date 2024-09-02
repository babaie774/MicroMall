const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("./async");
const jwt = require('jsonwebtoken');

// Protect routes
exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded JWT:', decoded); // Debugging line
    // req.product = await User.findById(decoded.id);

    req.user = {
      name: 'John Doe',
      role: 'admin'
    }

    if (!req.user) {
      return next(new ErrorResponse('No user found with this ID', 404));
    }

    next();
  } catch (err) {
    console.error('JWT verification error:', err); // Debugging line
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }
});

// Grant access to specific roles
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorResponse(
          `User role ${req.user.role} is not authorized to access this route`,
          403
        )
      );
    }
    next();
  };
};