const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir'); 

/**
 * iniciando o app
 */
const app = express();

/**
 * informando ao express que utilizamos json
 */
app.use(express.json());

/**
 * disponibilizando acesso fora do dominio 
 */
app.use(cors());

/**
 * iniciando conexão BD
 */
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

/**
 * pega todos arquivos desse diretorio
 */
requireDir('./src/models');

/**
 * definindo rotas para a api
 * req = requisição 
 * res = resposta
 */
app.use('/api', require('./src/routes'));

/**
 * disponibilizando aplicação na porta 3001
 */
app.listen(3001);