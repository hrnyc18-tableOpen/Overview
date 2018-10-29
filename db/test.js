// first 

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

var aggregate_score = Math.random() * (5 - 3) + 3;
var price_random = Math.floor(Math.random() * price_symbols.length);
var price_choice = price_symbols[Math.floor(Math.random() * price_symbols.length)];
var cuisine_random = Math.floor(Math.random() * cuisines.length);
var cuisine_choice = cuisines[cuisine_random];
var tag_random = Math.floor(Math.random() * tagData.length)
var tag_choice = tagData[tag_random];
var description = loremIpsum({
  count: 2,
  units: 'paragraphs',
  sentenceLowerBound: 5,
  sentenceUpperBound: 15,
  paragraphLowerBound: 3,
  paragraphUpperBound: 7,
  format: 'plain'
})
var private_dining_random = Math.floor(Math.random() * private_dining.length);
var private_dining_choice = private_dining[private_dining_random];
var dining_style_random = Math.floor(Math.random() * dining_style.length);
var dining_style_choice = dining_style[dining_style_random];
var hours_random = Math.floor(Math.random() * hours.length);
var hours_choice = hours[hours_random];
var phone_number_area_code_random = Math.floor(Math.random() * phone_number_area_code.length);
var phone_number_random = Math.floor(Math.random() * phoneNumberData.length);
var phone_number_choice = phone_number_area_code[phone_number_area_code_random] + phoneNumberData[phone_number_random];
// website // yelp
var payment_options_random = Math.floor(Math.random() * payment_options.length);
var payment_options_choice = payment_options[payment_options_random];
var dress_code_random = Math.floor(Math.random() * dress_code.length);
var dress_code_choice = dress_code[dress_code_random];
var executive_chef = nameData.slice(0, 100);
var executive_chef_random = Math.floor(Math.random() * executive_chef.length);
var executive_chef_choice = executive_chef[executive_chef_random];
var catering = loremIpsum({
  count: 2,
  units: 'paragraphs',
  sentenceLowerBound: 5,
  sentenceUpperBound: 15,
  paragraphLowerBound: 1,
  paragraphUpperBound: 2,
  format: 'plain'
})
var private_party_facilities_random = Math.floor(Math.random() * private_party_facilities.length);
var private_party_facilities_choice = private_party_facilities[private_party_facilities_random];
var private_party_contact_name = nameData.slice(100, 200); 
var private_party_contact_name_random = Math.floor(Math.random() * private_party_contact_name.length);
var private_party_contact_name_choice = private_party_contact_name[private_party_contact_name_random];
// var display_address // yelp
var neighborhood_random = Math.floor(Math.random() * neighborhoodData.length);
var neighborhood_choice = neighborhoodData[neighborhood_random];
var cross_street_random = Math.floor(Math.random() * cross_street.length);
var cross_street_choice = cross_street[cross_street_random];
var parking_details_random = Math.floor(Math.random() * parking_details.length);
var parking_details_choice = parking_details[parking_details_random];
var public_transit_random = Math.floor(Math.random() * public_transit.length);
var public_transit_choice = public_transit[public_transit_random];
var entertainment = loremIpsum({
  count: 1,
  units: 'sentences',
  sentenceLowerBound: 10,
  sentenceUpperBound: 20,
  format: 'plain'
})
var special_events_promotions = loremIpsum({
  count: 2,
  units: 'paragraphs',
  sentenceLowerBound: 5,
  sentenceUpperBound: 15,
  paragraphLowerBound: 1,
  paragraphUpperBound: 3,
  format: 'plain'
})
var additional_random = Math.floor(Math.random() * additional.length);
var additional_choice = additional[additional_random];
var private_dining_details = loremIpsum({
  count: 1,
  units: 'paragraphs',
  sentenceLowerBound: 5,
  sentenceUpperBound: 10,
  paragraphLowerBound: 1,
  paragraphUpperBound: 3,
  format: 'plain'
})
