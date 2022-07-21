require('dotenv').config();
const express = require('express');
const middlewareError = require('./middlewares/error.middleware');
const ativosRouter = require('./Routers/ativos.router');
const investimentosRouter = require('./Routers/investimentos.router');

const app = express();

app.use(express.json());

const port = process.env.PORT;

app.use('/investimentos', investimentosRouter);
app.use('/ativos', ativosRouter);

app.use(middlewareError);

app.listen(port, () => console.log('listen port', port));
