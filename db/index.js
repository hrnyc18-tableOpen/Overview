const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;

const Overview = mongoose.model('Overview', OverviewSchema);
const Schema = mongoose.Schema;

const OverviewSchema = new Schema({
  rid: {type: Number, required: true},
  name: {type: String, required: true},
  aggregate_score: Number,
  review_count: Number,
  price_quantile: String,
  cuisine: Array,
  tags: Array,
  description: String,
  private_dining: Boolean,
  dining_style: String,
  hours: String,
  phone_number: String,
  website: String,
  payment_options: Array,
  dress_code: String,
  executive_chef: String,
  catering: String,
  private_party_facilities: String,
  private_party_contact_name: String,
  private_party_contact_number: String,
  address: String,
  address2: String,
  city: String,
  state: String,
  postal_code: String,
  neighborhood: String,
  cross_street: String,
  parking_details: String,
  public_transit: String,
  entertainment: String,
  special_events_promotions: String,
  additional: String,
  private_dining_details: String
})

OverviewSchema.plugin(autoIncrement.plugin, {model: 'Overview', field: 'rid'})

mongoose.Promise = Promise;
db.on('error', () => {
  console.log('Mongoose default connection error:', err);
})
db.once('open', () => {
  console.log('Connected to db!');
})

module.exports.db = db;
module.exports.overview = overview;