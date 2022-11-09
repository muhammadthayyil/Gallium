const express = require('express');
const cors = require('cors')
const app = express();

const login_model = require('./search_model');

app.use(cors());
app.use(express.json())

app.post('/search', (req, res) => {
    login_model.getUser(req.body)
    .then(response => {
      res.status(200).send(response); //output to page (status() has hTTP code for output)
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })