const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
// const newrelic = require('newrelic');
require('dotenv').config();
const {template} = require('./html/index.js')
const fetch = require("node-fetch");



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.static(__dirname + '/../public'));

app.get('/:id', async (req, res) => {
  let id = req.params.id;
  let photos = await fetch(`http://52.52.28.79/${id}`).then(response => response.text())
  res.send(template(photos))
  // res.sendFile(path.join(__dirname, '../public', '/index.html'));
});

const port = process.env.PORT || 81;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
