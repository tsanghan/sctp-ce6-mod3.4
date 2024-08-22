// before rum
//npm install express

// to run
// npm start

'use strict';

import express from 'express';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
import OS from 'os';
const ENV = 'DEV';


// App
const app = express();
app.get('/', (req, res) => {
  res.statusCode = 200;
  const msg = 'Hello from Node!';
  res.send(msg);
});

app.get('/test', (req, res) => {
  res.statusCode = 200;
  const msg = 'Hello from /test Node!';
  res.send(msg);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);