// router/api.js
const express = require('express');
const router = express.Router();

// Define your API routes here
router.get('/', (req, res) => {
  res.send('🚀 Hello Justin! Your Express server is running from router/api.js!');
});

module.exports = router;
