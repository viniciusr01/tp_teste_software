const express = require('express');
const app = require('./config/config-express')
const routes = require('./routes')


app.use(routes);

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center">API Working!</h1>')
  })

app.use(express.static(__dirname +'./client'))

module.exports = app;