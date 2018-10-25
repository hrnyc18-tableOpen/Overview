var tagData = require('./opentable_data.js');
var neighborhoodData = require('./neighborhood_data.js');
var nameData = require('./name_data.js');
var phoneNumberData = require('./phone_number_data.js');


var name_values = []; // from yelp API
var aggregate_score = Math.floor(Math.random() * 6);
var review_count = Math.floor(Math.random() * 25000);
var price_random = Math.random(Math.random() * 3);
var price_symbol = ['$$', '$$$', '$$$$'];
var price_quantile = price_symbol[price_random];
var cuisine_random = Math.random(Math.random() * 70);
var cuisine_choice = ['American', 'Italian', 'Steakhouse', 'Seafood', 'French', 'Indian', 'Mexican', 'Japanese', 'British', 'Chinese', 'German', 'Spanish', 
'Pizzeria', 'Fusion / Eclectic', 'Barbecue', 'Greek', 'Tapas / Small Plates', 'Grill', 'Comfort Food', 'Turkish', 'Irish', 'Argentinean', 'Afternoon Tea',
'Portuguese', 'Burgers', 'Brazilian', 'Korean', 'Australian', 'Cuban', 'Organic', 'Austrian', 'Russian', 'Vegetarian / Vegan', 'Belgian', 'Breakfast', 'Dessert',
'Swiss', 'Halal', 'Asian', 'Bar / Lounge / Bottle Service', 'Beer Garden', 'Bistro', 'Café', 'Californian', 'Caribbean', 'Contemporary Asian', 'Contemporary European',
'Contemporary French', 'Continental', 'Deli', 'Dim Sum', 'Dining Bar', 'Dinner Cruise', 'Eastern European', 'European' ,'Farm-to-table', 'Gastro Pub',
'Global, International', 'International', 'Latin / Spanish', 'Latin American', 'Mediterranean', 'Middle Eastern', 'Pan-Asian', 'Peruvian', 'Ramen', 'South American',
'Thai', 'Wine Bar']
var tags = tagData;
var description = ['']; // lorem ipsum
var private_dining = [true, false];
var dining_style = ['Casual Dining', 'Casual Elegant'];
// hours
var phone_number_area_code = ['212', '646'];
var phone_number = phoneNumberData;
// website
var payment_options = [['AMEX', 'Carte Blanche', 'Diners Club', 'Discover', 'MasterCard', 'Pay with OpenTable', 'Visa'], ['AMEX', 'Carte Blanche', 'Diners Club', 'Discover', 'MasterCard', 'Visa'], ['AMEX', 'Diners Club', 'Discover', 'MasterCard', 'Visa'], ['AMEX', 'Discover', 'MasterCard', 'Visa'], ['AMEX', 'MasterCard', 'Visa']];
var dress_code = ['Smart Casual', 'Business Casual', 'Casual Dress'];
var executive_chef = nameData;
var catering = ['caters events from 5 to 500 guests, with the same spirit of hospitality as we provide every day in our restaurant.', ]
var private_party_facilities = ['Available for parties with 15 to 250 guests.', 'Private dining with bar for 45 seated guests, 60 standing. Private dining for 60 seated guests, 100 standing. Exclusive private dining for 300 seated guests, 550 standing.'];
var private_party_contact_name = nameData; 
var private_party_contact_number_area_code = ['212', '646'];
// address // yelp API
// address2 // yelp API
// city // yelp API
// state // yelp API
// postal_code // yelp API
var neighborhood = neighborhoodData
var cross_street = ['Broadway', 'Madison', 'Between 5th and 6th ave', '43rd St. (southeast corner)', 'West 49th Street', 'Between E. 38th & E 39th Streets', 'Between 27th & 28th', '13th Street', '16th Street', 'Between Park and Broadway', '26th Street', '30th Street', 'Between Broadway and 8th Avenue', '24th Street']
var parking_details = ['There are two independent parking garages adjacent to the restaurant.', 'We validate parking at a discounted price only after 5PM. $14 upto 2.5 hours or $17 upto 4 hours.', 'Street Parking where available. The nearest garage is on 36th street off of 7th Ave.', 'Street parking after 7:00PM. We validate parking (after 5pm) at Meyers Parking 9-19 west 35th street', 'Street parking after 6pm M-F Weekends all day']
var public_transit = ['R/W (yellow line) trains at 28th and Broadway, 1 train at 28th and 7th Avenue', '1, 2, 3, 7, 9 N, R, W, & Q trains to 42nd Street/Times Square.', 'Near Herald Square 34th st: N, Q, R, F, M; Near Penn Station 34th St: 1, 2, 3, A, C, E', '23rd street stop, 6 line 23rd street stop, N,R lines 23rd street stop, F, M lines Union Square']
var entertainment = ['Our resident DJ spins Thursday, Friday and Saturday from 7pm to close']
var special_events_promotions = ['Located in the W Hotel in the heart of Times Square, Blue Fin is sophisticated and sexy. Three private dining rooms and a large second floor are all available for business and social functions. Blue Fin is also available for full and partial buyouts. Accommodates 12-500 guests. Contact Special Events at 212-331-0328 or email events@brguestinc.com. Or request event information online here: http://www.brguesthospitality.com/event-venues/book-event.',
'Hakkasan New York can accommodate private events from 10 to 350 guests. Please call the restaurant directly to request additional information regarding special event accommodations.']
var additional = ['Banquet, Bar Dining, Bar/Lounge, Beer, BYO Wine, Chef\'s Table, Corkage Fee, Counter Seating, Full Bar, Outdoor dining, Private Room, Weekend Brunch, Wheelchair Access, Wine', 'Bar Dining, Bar/Lounge, Full Bar, Late Night, Private Room, Weekend Brunch, Wheelchair Access, Wine', 'Bar Dining, Full Bar, Late Night, Private Room, Weekend Brunch, Wheelchair Access, Wine', 'Bar Dining, Late Night, Private Room, Weekend Brunch, Wheelchair Access, Wine', 'Bar Dining, Private Room, Weekend Brunch, Wheelchair Access, Wine', 'Bar Dining, Weekend Brunch, Wheelchair Access, Wine', 'Bar Dining, Weekend Brunch, Wine', 'Bar Dining, Wine']
var private_dining_details = [];

