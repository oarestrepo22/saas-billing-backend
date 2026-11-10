const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'SaaS Billing Backend is running',
  });
});

module.exports = app;
