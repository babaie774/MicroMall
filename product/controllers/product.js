const Product = require('../models/Product');
const asyncHandler = require('../middleware/async');

// @desc      Get product data
// @route     GET /api/v1/getUsers
// @access    Private/Admin
exports.getUsers = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

// @desc      Create product
// @route     POST /api/v1/users
// @access    Private/Admin
exports.createUser = asyncHandler(async (req, res, next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        data: product
    });
});

// @desc      Get users list
// @route     GET /api/v1/getUsers
// @access    Private/Admin
exports.getUser = asyncHandler(async (req, res, next) => {
    const users = await Product.findOne(rq.params.id);
    res.status(200).json({
        success: true,
        count: users.length,
        data: users
    });

    next(err => {
        res.status(500).json({ success: false, error: 'Server Error' })
    })
});

// @desc      Update product
// @route     PUT /api/v1/product
// @access    Private/Admin
exports.updateUser = asyncHandler(async (req, res, next) => {
    const product = Product.findOne(req.params.id);

    if (!product) {
        res.status(404).json({
            success: false,
            data: 'Product not found'
        })
    }

    const updateObj = {
        $set: update
    }

    const result = await Product.findByIdAndUpdate(product._id, updateObj, {
        new: true,
        runValidators: true
    });

    res.status(201).json({
        success: true,
        data: result
    });

    next(err => {
        res.status(500).json({ success: false, error: `Error deleting product: ${err}` })
    })
});

// @desc      Delete product
// @route     DELETE /api/v1/product
// @access    Private/Admin
exports.deleteUser = asyncHandler(async (req, res, next) => {
    const product = Product.findByIdAndDelete(req.params.id);

    if (!product) {
        res.status(404).json({
            success: false,
            massage: 'Product not found'
        })
    }

    res.status(200).json({ success: true, userId: product._id })

    next(err => {
        res.status(500).json({
            success: false,
            massage: 'Something went wrong'
        })
    })
})