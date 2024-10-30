// routes/comment.js
const express = require('express');
const router = express.Router();
const { addCommentVulneravel, addCommentSeguro } = require('../controllers/commentController');

// Rota para adicionar um comentário vulnerável a XSS
router.post('/comment-vulneravel', addCommentVulneravel);

// Rota para adicionar um comentário seguro contra XSS
router.post('/comment-seguro', addCommentSeguro);

module.exports = router;
