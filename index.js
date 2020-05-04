const express = require('express');

//for testing pull
const apps = express();
const apps1 = express();
const app = express();

require('./websocket-server');

app.use(express.static('public'));

app.listen(process.env.HTTP_PORT, () => {
  console.log('Server listening on port:', process.env.HTTP_PORT);
});
