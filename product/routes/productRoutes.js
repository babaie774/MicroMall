const express = require('express');
const router = express.Router();

// @desc Fetch all products
// @route GET /products
// @access Public
router.get('/products', async (req, res) => {
    try {
        res.status(200).send([]);
    } catch (err) {
        res.status(500).send(err);
    }
})

// @desc Create a new product
// @route POST /products
// @access Public
router.post('/products', async (req, res) => {
    const userId = req.params.id;

    try {
        // const products = await Product.find();
        res.status(200).send(userId);
    } catch (err) {
        res.status(500).send(err);
    }
})

// @desc Fetch a single product by ID
// @route GET /products/:id
// @access Public
router.get('/products/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        // const products = await Product.find();
        res.status(200).send(userId);
    } catch (err) {
        res.status(500).send(err);
    }
})

// @desc Update a product by ID
// @route PUT /products/:id
// @access Public
router.put('/products/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        res.status(200).send(userId);
    } catch (err) {
        res.status(500).send(err);
    }
})

// @desc Delete a product by ID
// @route DELETE /products/:id
// @access Public
router.delete('/products/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        res.status(200).send(userId);
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router;
