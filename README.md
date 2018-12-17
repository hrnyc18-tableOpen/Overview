# Overview

The Overview module displays descriptive information about a specific restaurant. Below is a preview of the deployed service.

![](https://github.com/hrnyc18-tableOpen/Overview/blob/master/TableOpen_Overview.gif) 

## Related Projects

- https://github.com/hrnyc18-tableOpen/Reviews
- https://github.com/hrnyc18-tableOpen/Header
- https://github.com/hrnyc18-tableOpen/Reservations-2

## Development

### Installing dependencies

```sh
npm install
```

The microservice accesses data from a Mongo database that stores information about restaurants. 

1) Create a database named "staybnb"
2) Set up a `config.js` in the root directory with the following structure: 

```js
var GOOGLE_API_KEY = 'your_Google_API_key';
var YELP_API_KEY = 'your_Yelp_API_key';

module.exports.GOOGLE_API_KEY = GOOGLE_API_KEY;
module.exports.YELP_API_KEY = YELP_API_KEY;
```

3) Run the following command in the root directory to populate it with data.

```sh
npm run seed
```

### Launching the application locally

From within the root directory:

```sh
# run webpack to build client bundle
npm run react-dev

# start server on localhost
npm run server-dev
```

Access the application at: http://localhost:3010/restaurants/# with # representing any number from 1 to 50. For example, access restaurant 19's information at http://localhost:3010/restaurants/19.

## API Specs

### GET /api

```sh
# parameter(s)
id: restaurant ID
```

### Response example (application/json)

```js
[ { cuisine: [ 'International', 'Middle Eastern' ],
    tags: [ 'Great for Lunch', 'Cellar', 'Mother\'s Day' ],
    hours:
     [ 'Monday - 11:30 AM – Midnight',
       'Tuesday - 11:30 AM – Midnight',
       'Wednesday - 11:00 AM – Midnight',
       'Thursday - 11:30 AM – Midnight',
       'Friday - 11:30 AM – Midnight',
       'Saturday - 11:00 AM – Midnight',
       'Sunday - 11:00 AM – 11:30 PM' ],
    payment_options:
     [ 'AMEX, Carte Blanche, Diners Club, Discover, MasterCard, Pay with OpenTable, Visa' ],
    _id: 5c1818d93d78f10b2dc08467,
    OverviewChildSchema:
     { display_address: ["170 W 4th St", "New York, NY 10014"],
       _id: 5c1818d93d78f10b2dc08468,
       name: 'Las Ramblas',
       review_count: 669,
       display_phone: '(646) 415-7924',
       coordinates: {
            "latitude": 40.723628,
            "longitude": -74.003927
        },
       website: 'http://www.LasRamblas.com' },
    aggregate_score: 4.398123755371875,
    price_quantile: '$30 and under',
    description:
     'Excepteur quis qui dolor consequat consequat consectetur Lorem ullamco labore officia dolore ea. Voluptate adipisicing ullamco enim consectetur culpa enim laborum esse anim esse minim voluptate adipisicing. Magna ad occaecat id adipisicing.\n\nAute sunt in mollit irure sunt anim mollit. Pariatur eiusmod aute amet adipisicing et amet. Ea eu aute labore deserunt enim excepteur quis Lorem cupidatat ipsum fugiat esse est. Fugiat deserunt ut ex nulla exercitation tempor.',
    private_dining: true,
    dining_style: 'Casual Dining',
    dress_code: 'Business Casual',
    executive_chef: 'Nerty Kezar',
    catering:
     'Veniam eiusmod non ea velit nostrud. Lorem laboris officia laboris reprehenderit culpa et cupidatat.\n\nAnim pariatur sint dolor in adipisicing consequat esse magna. Ipsum adipisicing Lorem esse quis excepteur anim laboris ut non ipsum quis enim.',
    private_party_facilities: 'Available for parties with 15 to 250 guests.',
    private_party_contact_name: 'Brigit Sponder',
    private_party_contact_number: '(212) 316-9780',
    neighborhood: 'NoMad',
    cross_street: '13th Street',
    parking_details: 'Street parking after 6pm M-F Weekends all day',
    public_transit:
     'R/W (yellow line) trains at 28th and Broadway, 1 train at 28th and 7th Avenue',
    entertainment:
     'Tempor labore incididunt cupidatat fugiat elit sit veniam in proident eu cillum qui mollit ut exercitation incididunt duis excepteur esse.',
    special_events_promotions:
     'Non cillum Lorem consequat quis dolore enim non dolore aute est quis.\n\nSit nisi ex cillum reprehenderit labore pariatur. Incididunt ut reprehenderit ipsum anim. Sunt commodo do qui ullamco anim nisi incididunt ea.',
    additional: 'Bar Dining, Weekend Brunch, Wheelchair Access, Wine',
    private_dining_details:
     'In fugiat laborum ad ipsum veniam dolore minim ut pariatur. Id veniam aliquip elit cupidatat. Sunt cillum cupidatat deserunt amet labore consectetur adipisicing eu culpa.',
    rid: 50,
    __v: 0 } ]
```