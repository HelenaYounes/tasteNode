const fetch = require('node-fetch');
const express = require('express');
const app = express();

app.get('/suggestions', (request, response) => {
  const url = 'https://tastedive.com/api/similar?q=red+hot+chili+peppers%2C+pulp+fiction&k=305528-helenayo-DC3O5ZEW';
  fetch(url)
    .then(res => res.json())
    .then(json => {
      // console.log(json));
      response.send(json)
    });
});

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.set('view engine', 'pug');


app.use(express.static('dist'))

app.listen(5000);
