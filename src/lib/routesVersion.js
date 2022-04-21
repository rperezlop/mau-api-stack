const express = require('express');
const app = express();
const routes = require('./routers');

app.get('/', (req, res) => {
  res.send('Hola Mundo!');
  //throw new Error('Boom');
})
app.use('/mau', [routes]);

module.exports = app;