// routes/auth.js
const express = require('express');
const router = express.Router();
const { loginVulneravel } = require('../controllers/authController');

router.post('/login-vulneravel', loginVulneravel);

module.exports = router;
