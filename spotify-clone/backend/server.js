const express = require('express')
require('dotenv').config();
const app = express(); 
const port = 8000; 
const bodyParser = require("body-parser");

const { login, search } = require('./instagram-queries');

app.use(bodyParser.urlencoded({extended: true}))


app.get('/test', (req, res) => {
  res.send("Hello World");
})

app.post('/authorize', (req, res) => {
  login().then((response) => {
    console.log("server-response", response);
    res.send(response);
  })
})

app.get('/search/:query', (req, res) => {
  const query = req.params.query;
  search(query).then((response) => {
    res.json(response);
  })
})


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})


