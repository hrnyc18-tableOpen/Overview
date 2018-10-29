var db = require('../../db/index.js');

module.exports = {
  get: (id, cb) => {
    db.Overview.find({rid: id}, (err, results) => {
      if (err) {
        console.log(err);
      }
      cb(results); 
    })
  }
}