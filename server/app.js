const fetch = require('node-fetch');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('dist'));

app.use(bodyParser.urlencoded({extended: false}));

app.get('/suggestionsData', (request, response) => {
  const url = 'https://tastedive.com/api/similar?q=red+hot+chili+peppers%2C+pulp+fiction&k=305528-helenayo-DC3O5ZEW';
  fetch(url)
    .then(res => res.json())
    .then(json => response.render('templates/suggestionsList', {results: json.Similar.Results}));
});

app.get('/', function (req, res) {
  res.render('index', { title: 'TasteDiveAPI'})
});

app.get('/home', (req, res) => {
  res.render('home');
});

app.post('/suggestions', (req, res) => {
  console.log(req.body);
  res.render('templates/suggestionsList');
});

app.set('view engine', 'pug');



app.listen(5000);
