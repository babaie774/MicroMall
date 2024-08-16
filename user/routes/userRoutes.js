const express = require('express');
const router = express.Router();

// @desc Create a new order (JWT protected)
// @route GET /orders
// @access Public
router.get('/orders', async (req, res) => {
    try {
        // const products = await Product.find();
        res.status(200).send([]);
    } catch (err) {
        res.status(500).send(err);
    }
})

// @desc Get all orders for the authenticated user (JWT protected)
// @route POST /orders
// @access Public
router.post('/orders', async (req, res) => {
    const userId = req.params.id;

    try {
        // const products = await Product.find();
        res.status(200).send(userId);
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router;
