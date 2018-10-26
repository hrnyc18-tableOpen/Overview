var db = require('../../db/index.js');

module.exports = {
  save: function(data){
    console.log('model data', data);
    var child = new db.Overview({
      OverviewChildSchema: data
    })
    child.save((err) => {
      if (err) {
        console.log(err);
      }
    })
  }
}