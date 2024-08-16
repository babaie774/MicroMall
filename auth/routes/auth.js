const express = require('express');
const router = express.Router();

// @desc Register a new user
// @route GET /Login
// @access Public
router.post('/register', async (req, res) => {
    try {
        // const products = await Product.find();
        res.status(200).send([]);
    } catch (err) {
        res.status(500).send(err);
    }
})

// @desc Get all orders for the authenticated user (JWT protected)
// @route POST /logout
// @access Public
router.post('/logout', async (req, res) => {
    const userId = req.params.id;

    try {
        // const products = await Product.find();
        res.status(200).send(userId);
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router;
