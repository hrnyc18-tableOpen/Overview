const axios = require('axios');
const model = require('../models/overviewModel.js')
const path = require('path');
console.log(__dirname);
module.exports = {
  get: (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
  },
  getRestaurant: (req, res) => {
    console.log('req params', req.params.id)
    model.get(req.params.id, (data) => {
      res.send(data);
    })
  }
}


