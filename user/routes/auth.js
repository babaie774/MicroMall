const express = require('express');
const router = express.Router();

// @desc Get user profile (JWT protected)
// @route GET /profile
// @access private
router.get('/profile', async (req, res) => {
    try {
        res.status(200).send([]);
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router;
