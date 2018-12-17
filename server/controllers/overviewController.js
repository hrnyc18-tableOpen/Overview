const model = require("../models/overviewModel.js");
const path = require("path");

module.exports = {
  get: (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
  },
  getRestaurant: (req, res) => {
    model.get(req.params.id, data => {
      res.send(data);
    });
  }
};
