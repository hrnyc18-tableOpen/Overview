var express = require('express');
var app = express();
var axios = require('axios');
var body = require('body-parser');
var path = require('path');
var config = require('../config.js');
var model = require('../server/models/overviewModel.js');
var db = require('../db/index.js');

app.use(body.json());

const authstr = 'Bearer '.concat(config.API_KEY);

app.post('/business', function(req, res) {
  axios.get('https://api.yelp.com/v3/businesses/search', {
    params: {
      term: 'restaurants',
      latitude: '40.725937',
      longitude: '-74.008256',
      limit: 50
    },
    headers: {
      Authorization: authstr
    }
  })
  .then(function(data) {
    var businesses = JSON.parse(JSON.stringify(data.data.businesses));
    businesses.map((business) => {
      var info = {};
      info.name = business.name;
      info.review_count = business.review_count;
      info.display_address = business.location.display_address;
      info.display_phone = business.display_phone;
      info.coordinates = business.coordinates;
      info.website = 'http://www.' + business.name.replace(" ", "") + '.com';
      // console.log('info is', info);
      // model.save(info);
      var child = new db.Overview({
        OverviewChildSchema: info
      })
      child.save((err) => {
        if (err) {
          console.log(err);
        }
      })
      // allBusinesses.push(info);
    })
  })
  .catch(function(err) {
    if (err) {
      console.log(err);
    }
  })
});

app.listen(3010, function() {
  console.log('listening on port 3010!');
});