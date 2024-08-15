const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        // const products = await Product.find();
        res.status(200).send([]);
    } catch (err) {
        res.status(500).send(err);
    }
})

router.get('/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        // const products = await Product.find();
        res.status(200).send(userId);
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router;
