const express = require('express');
const cors = require('cors');
const requireDir = require('require-dir');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

require('./databases/connection');
requireDir('./models');

app.use('/api', require('./routes'));

app.listen(process.env.API_PORT, () => {
    console.log(`Api Online - Port: ${process.env.API_PORT}` );
});