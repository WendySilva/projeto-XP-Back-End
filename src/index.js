require('dotenv').config();
const express = require('express');
const { default: investimentosRouter } = require('./Routers/investimentos.router');

const app = express();

app.use(express.json());

const port = process.env.PORT;

app.use('/investimentos', investimentosRouter);

app.listen(port, () => console.log('listen port', port));
