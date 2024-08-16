// api-gateway/index.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware to log the incoming requests
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

// Route to Product Service
app.use('/products', createProxyMiddleware({
    target: 'http://localhost:3001', // Product Service URL
    changeOrigin: true,
}));

// Route to User Service
app.use('/users', createProxyMiddleware({
    target: 'http://localhost:3002', // User Service URL
    changeOrigin: true,
}));

// Route to Order Service
app.use('/orders', createProxyMiddleware({
    target: 'http://localhost:3003', // Order Service URL
    changeOrigin: true,
}));

// Handle default route
app.get('/', (req, res) => {
    res.send('API Gateway is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});
