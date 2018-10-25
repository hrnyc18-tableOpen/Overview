var express = require('express');
var app = express();
var axios = require('axios');
var body = require('body-parser');
var path = require('path');
var config = require('../config.js');

app.use(body.json());

const authstr = 'Bearer '.concat(config.API_KEY);

app.post('/business', function(req, res) {
  axios.get('https://api.yelp.com/v3/businesses/search', {
    params: {
      term: 'restaurants',
      latitude: '40.725937',
      longitude: '-74.008256'
    },
    headers: {
      Authorization: authstr
    }
  })
  .then(function(data) {
    var business = JSON.parse(JSON.stringify(data.data.businesses));
    
  })
  .catch(function(err) {
    if (err) {
      console.log(err);
    }
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});