const express = require('express')
require('dotenv').config();
const app = express(); 
const port = 8000; 
const bodyParser = require("body-parser");
const cors = require("cors");

const { login, search, getUser, getUserPosts } = require('./instagram-queries');

app.use(bodyParser.urlencoded({extended: true}))
app.use(
  cors({
    origin: "*",
  })
);


app.get('/test', (req, res) => {
  res.status(200).send("Hello World");
})

app.post('/authorize', (req, res) => {
  login().then((response) => {
    res.send(response);
  })
})

app.get('/search/:query', (req, res) => {
  const query = req.params.query;
  search(query).then((response) => {
    res.json(response);
  })
})

app.get('/user/:username', (req, res) => {
  const username = req.params.username;
  getUser(username).then((response) => {
    res.json(response);
  })
})

app.get('/user/:userid/posts', (req, res) => {
  const userid = req.params.userid;
  getUserPosts(userid).then((response) => {
    res.json(response);
  })
  
})


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})


