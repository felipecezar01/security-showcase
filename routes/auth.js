// routes/auth.js
const express = require('express');
const router = express.Router();
const { loginVulneravel, loginSeguro } = require('../controllers/authController');

router.post('/login-vulneravel', loginVulneravel);
router.post('/login-seguro', loginSeguro); // Nova rota para o login seguro

module.exports = router;
