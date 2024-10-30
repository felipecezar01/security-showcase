// routes/comment.js
const express = require('express');
const router = express.Router();
const { addCommentVulneravel } = require('../controllers/commentController');

// Rota para adicionar um comentário vulnerável a XSS
router.post('/comment-vulneravel', addCommentVulneravel);

module.exports = router;
