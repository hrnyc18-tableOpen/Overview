var db = require('../../db/index.js');

module.exports = {
  // get: (id, cb) => {
  //   console.log('IN GET INFO')
  //   db.Overview.find({rid: id}, (err, results) => {
  //     console.log('in query ID IS',id)
  //     if (err) {
  //       console.log(err);
  //     }
  //     cb(null, results); 
  //   })
  // }
  get: (id,cb) => {
    let info= `SELECT * FROM Overview WHERE rid (?)`;
    connection.query(info, id, (err, data) => {
        if (err) {
            console.error(err);
        } else {
            cb(null, data);
        }
    });
  
}
}