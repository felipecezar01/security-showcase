// app.js
const express = require('express');
const https = require('https');
const fs = require('fs');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const commentRoutes = require('./routes/comment');

dotenv.config();

const app = express();
app.use(express.json());

// Rotas
app.use('/auth', authRoutes);
app.use('/comments', commentRoutes);

// Carrega o certificado e a chave
const httpsOptions = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

const PORT = process.env.PORT || 3000;

// Servidor HTTPS
https.createServer(httpsOptions, app).listen(PORT, () => {
  console.log(`Servidor rodando com HTTPS na porta ${PORT}`);
});
