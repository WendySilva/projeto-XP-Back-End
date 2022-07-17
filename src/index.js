const { application, response } = require('express');
const express = require('express');

const app = express();

app.use(express.json());

const port = 3000;

// app.get('/', (_req, res) => {
//   response.send();
// });

app.listen(port, () => console.log('listen port', port));
