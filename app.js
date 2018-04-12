const fetch = require('node-fetch');
const express = require('express');
const app = express();

app.get('/', (request, response) => {
  const url = 'https://tastedive.com/api/similar?q=red+hot+chili+peppers%2C+pulp+fiction&k=305528-helenayo-DC3O5ZEW';
  fetch(url)
    .then(res => res.json())
    .then(json => {
      // console.log(json));
      response.send(json)
    });
});

app.listen(3000);
