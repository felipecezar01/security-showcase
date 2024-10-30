// controllers/commentController.js
const pool = require('../config/db');
const sanitizeHtml = require('sanitize-html');

const addCommentVulneravel = (req, res) => {
  const { user_id, content } = req.body;

  // Consulta SQL para inserir o comentário diretamente, sem sanitização
  const query = 'INSERT INTO comments (user_id, content) VALUES ($1, $2) RETURNING *';
  const values = [user_id, content];

  pool.query(query, values, (error, results) => {
    if (error) {
      console.error("Erro ao inserir comentário:", error);
      res.status(500).json({ message: 'Erro no servidor ao adicionar comentário' });
    } else {
      res.status(201).json({ message: 'Comentário adicionado (vulnerável a XSS)', comment: results.rows[0] });
    }
  });
};

const addCommentSeguro = (req, res) => {
  const { user_id, content } = req.body;

  // Sanitiza o conteúdo para remover scripts e tags perigosas
  const sanitizedContent = sanitizeHtml(content, {
    allowedTags: [], // Permitir apenas texto sem tags HTML
    allowedAttributes: {}
  });

  const query = 'INSERT INTO comments (user_id, content) VALUES ($1, $2) RETURNING *';
  const values = [user_id, sanitizedContent];

  pool.query(query, values, (error, results) => {
    if (error) {
      console.error("Erro ao inserir comentário:", error);
      res.status(500).json({ message: 'Erro no servidor ao adicionar comentário' });
    } else {
      res.status(201).json({ message: 'Comentário adicionado com segurança (protegido contra XSS)', comment: results.rows[0] });
    }
  });
};

module.exports = { addCommentVulneravel, addCommentSeguro };
