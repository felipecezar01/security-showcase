// controllers/commentController.js
const pool = require('../config/db');

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

module.exports = { addCommentVulneravel };
