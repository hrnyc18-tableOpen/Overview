const axios = require('axios');

module.exports = {
  get: (req, res) => {
    res.sendFile('../../client/dist/index.html');
  },
  getRestaurant: (req, res) => {
    Overview.find({id: req.params.id})
    .then(res.send);
  }
}

