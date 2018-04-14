const fetch = require('node-fetch');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const url = "https://tastedive.com/api/similar?k=305528-helenayo-DC3O5ZEW&q="

app.use(express.static('dist'));

app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());

app.get('/', (req, res) => {
  res.render('home');
});

app.post('/suggestion', (req, response) => {
  const id = req.body.suggestion
  response.redirect(`suggestion/${id}`)
});

app.get('/suggestion/:id', (req, res) => {
  const id = req.params.id;
  const query = url + id;
  fetch(query)
    .then(response => response.json())
    .then(json => res.render('suggestionsList', {results: json.Similar.Results}));
});

app.set('view engine', 'pug');

app.listen(5000);
