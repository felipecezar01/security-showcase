// controllers/authController.js
const pool = require('../config/db');

const loginVulneravel = (req, res) => {
  const { email, password } = req.body;
  const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;

  console.log("Query executada:", query); // Adiciona um log para a query

  pool.query(query, (error, results) => {
    if (error) {
      console.error("Erro na consulta SQL:", error);
      res.status(500).json({ message: 'Erro no servidor' });
    } else if (results.rows.length > 0) {
      res.status(200).json({ message: 'Login realizado com sucesso (vulnerável a SQL Injection)' });
    } else {
      res.status(401).json({ message: 'Credenciais incorretas' });
    }
  });
};

module.exports = { loginVulneravel };
