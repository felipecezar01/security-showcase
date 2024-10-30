// app.js
const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const commentRoutes = require('./routes/comment'); // Adicione esta linha

dotenv.config();

const app = express();
app.use(express.json());

// Rotas
app.use('/auth', authRoutes);
app.use('/comments', commentRoutes); // Adicione esta linha

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
