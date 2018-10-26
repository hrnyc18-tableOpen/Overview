var tagData = require('./opentable_data.js');
var neighborhoodData = require('./neighborhood_data.js');
var nameData = require('./name_data.js');
var phoneNumberData = require('./phone_number_data.js');
var loremIpsum = require('lorem-ipsum');
var express = require('express');
var app = express();
var axios = require('axios');
var body = require('body-parser');
var path = require('path');
var config = require('../config.js');
var model = require('../server/models/overviewModel.js');
var db = require('../db/index.js');

var price_symbols = ['$$', '$$$', '$$$$'];
var cuisines = ['American', 'Italian', 'Steakhouse', 'Seafood', 'French', 'Indian', 'Mexican', 'Japanese', 'British', 'Chinese', 'German', 'Spanish', 
'Pizzeria', 'Fusion / Eclectic', 'Barbecue', 'Greek', 'Tapas / Small Plates', 'Grill', 'Comfort Food', 'Turkish', 'Irish', 'Argentinean', 'Afternoon Tea',
'Portuguese', 'Burgers', 'Brazilian', 'Korean', 'Australian', 'Cuban', 'Organic', 'Austrian', 'Russian', 'Vegetarian / Vegan', 'Belgian', 'Breakfast', 'Dessert',
'Swiss', 'Halal', 'Asian', 'Bar / Lounge / Bottle Service', 'Beer Garden', 'Bistro', 'Café', 'Californian', 'Caribbean', 'Contemporary Asian', 'Contemporary European',
'Contemporary French', 'Continental', 'Deli', 'Dim Sum', 'Dining Bar', 'Dinner Cruise', 'Eastern European', 'European' ,'Farm-to-table', 'Gastro Pub',
'Global, International', 'International', 'Latin / Spanish', 'Latin American', 'Mediterranean', 'Middle Eastern', 'Pan-Asian', 'Peruvian', 'Ramen', 'South American',
'Thai', 'Wine Bar'];
var private_dining = [true, false];
var dining_style = ['Casual Dining', 'Casual Elegant'];
var hours = [['Monday - 11:30 AM – Midnight','Tuesday - 11:30 AM – Midnight','Wednesday - 11:00 AM – Midnight','Thursday - 11:30 AM – Midnight','Friday - 11:30 AM – Midnight','Saturday - 11:00 AM – Midnight','Sunday - 11:00 AM – 11:30 PM'],
['Monday-Friday', 'Lunch: 11:30AM-3:30PM', 'Monday – Wednesday', 'Dinner: 5:30PM-12:30AM', 'Thursday – Friday', 'Dinner: 5:30PM-1:00AM', 'Saturday', 'Brunch: 11:00AM-3:30PM', 'Dinner: 5:30PM-1:00AM', 'Sunday', 'Brunch: 11:00AM-3:30PM', 'Dinner: 5:30PM-12:30AM'],
['M-Th: 11:30 a.m. – midnight', 'Fri: 11:30 a.m. – 1:00 a.m.', 'Sat: 10:00 a.m. – 1:00 a.m.', 'Sun: 10:00 a.m. – midnight'], 
['Monday & Tuesday 5:30pm - 11:00pm', 'Wednesday & Thursday 5:30pm - 12:00am', 'Friday & Saturday 5:00pm - 1:00am', 'Sunday 5:00pm - 11:00pm'],
['Sunday – Wednesday: 5pm – 12am', 'Thursday – Saturday: 5pm – 2am', 'Last dinner reservations at 11:45am (Sun - Wed) and 1:45am (Thu - Sat).', 'Restaurant Bar remains open at least one hour after the kitchen closes.']]
var phone_number_area_code = ['212', '646'];
var payment_options = [['AMEX', 'Carte Blanche', 'Diners Club', 'Discover', 'MasterCard', 'Pay with OpenTable', 'Visa'], ['AMEX', 'Carte Blanche', 'Diners Club', 'Discover', 'MasterCard', 'Visa'], ['AMEX', 'Diners Club', 'Discover', 'MasterCard', 'Visa'], ['AMEX', 'Discover', 'MasterCard', 'Visa'], ['AMEX', 'MasterCard', 'Visa']];
var dress_code = ['Smart Casual', 'Business Casual', 'Casual Dress'];
var private_party_facilities = ['Available for parties with 15 to 250 guests.', 'Private dining with bar for 45 seated guests, 60 standing. Private dining for 60 seated guests, 100 standing. Exclusive private dining for 300 seated guests, 550 standing.'];
var cross_street = ['Broadway', 'Madison', 'Between 5th and 6th ave', '43rd St. (southeast corner)', 'West 49th Street', 'Between E. 38th & E 39th Streets', 'Between 27th & 28th', '13th Street', '16th Street', 'Between Park and Broadway', '26th Street', '30th Street', 'Between Broadway and 8th Avenue', '24th Street']
var parking_details = ['There are two independent parking garages adjacent to the restaurant.', 'We validate parking at a discounted price only after 5PM. $14 upto 2.5 hours or $17 upto 4 hours.', 'Street Parking where available. The nearest garage is on 36th street off of 7th Ave.', 'Street parking after 7:00PM. We validate parking (after 5pm) at Meyers Parking 9-19 west 35th street', 'Street parking after 6pm M-F Weekends all day']
var public_transit = ['R/W (yellow line) trains at 28th and Broadway, 1 train at 28th and 7th Avenue', '1, 2, 3, 7, 9 N, R, W, & Q trains to 42nd Street/Times Square.', 'Near Herald Square 34th st: N, Q, R, F, M; Near Penn Station 34th St: 1, 2, 3, A, C, E', '23rd street stop, 6 line 23rd street stop, N,R lines 23rd street stop, F, M lines Union Square']
var private_party_contact_number_area_code = ['212', '646'];
var additional = ['Banquet, Bar Dining, Bar/Lounge, Beer, BYO Wine, Chef\'s Table, Corkage Fee, Counter Seating, Full Bar, Outdoor dining, Private Room, Weekend Brunch, Wheelchair Access, Wine', 'Bar Dining, Bar/Lounge, Full Bar, Late Night, Private Room, Weekend Brunch, Wheelchair Access, Wine', 'Bar Dining, Full Bar, Late Night, Private Room, Weekend Brunch, Wheelchair Access, Wine', 'Bar Dining, Late Night, Private Room, Weekend Brunch, Wheelchair Access, Wine', 'Bar Dining, Private Room, Weekend Brunch, Wheelchair Access, Wine', 'Bar Dining, Weekend Brunch, Wheelchair Access, Wine', 'Bar Dining, Weekend Brunch, Wine', 'Bar Dining, Wine']
// var name_values = []; // from yelp API
// var review_count // yelp

app.use(body.json());

const authstr = 'Bearer '.concat(config.API_KEY);


var aggregate_score = Math.floor(Math.random() * 6);
var price_random = Math.floor(Math.random() * price_symbol.length);
var price_choice = price_symbols[Math.floor(Math.random() * price_symbol.length)];
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
        OverviewChildSchema: info,
        aggregate_score: Math.floor(Math.random() * 6),
        price_quantile: price_symbols[Math.floor(Math.random() * price_symbol.length)],
        cuisine: cuisines[Math.floor(Math.random() * cuisines.length)],
        tags: tagData[Math.floor(Math.random() * tagData.length)],
        description: String,
        private_dining: Boolean,
        dining_style: String,
        hours: String,
        payment_options: Array,
        dress_code: String,
        executive_chef: String,
        catering: String,
        private_party_facilities: String,
        private_party_contact_name: String,
        private_party_contact_number: String,
        coordinates: Object,
        neighborhood: String,
        cross_street: String,
        parking_details: String,
        public_transit: String,
        entertainment: String,
        special_events_promotions: String,
        additional: String,
        private_dining_details: String
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