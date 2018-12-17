var express = require("express");
var body = require("body-parser");
var app = express();
var path = require("path");
var compression = require("compression");

app.use(compression());
app.use(body.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

const overviewRoutes = require("./routes/overviewRoutes.js");

app.use("/", overviewRoutes);

app.listen(3010, function() {
  console.log("listening on port 3010!");
});
