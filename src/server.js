const express = require('express');
const cors = require('cors');
const requireDir = require('require-dir');
require('dotenv').config();
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

require('./databases/connection');
requireDir('./models');

app.use('/api', require('./routes'));

app.listen(process.env.API_PORT, () => {
    console.log(`Api Online - Port: ${process.env.API_PORT}` );
});