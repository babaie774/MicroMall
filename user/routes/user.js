const express = require('express');
const { getProfile } = require('../controller/user');
const router = express.Router();

// @desc Get user profile (JWT protected)
// @route GET /profile
// @access private
router.route('/getProfile').get(getProfile)

module.exports = router;
