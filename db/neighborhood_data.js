var data = [
  {
    name: "Chelsea"
  },
  {
    name: "Garment District / Flower District"
  },
  {
    name: "Gramercy / Flatiron"
  },
  {
    name: "Hell's Kitchen"
  },
  {
    name: "Kips Bay"
  },
  {
    name: "Midtown East"
  },
  {
    name: "Midtown West"
  },
  {
    name: "Murray Hill"
  },
  {
    name: "NoMad"
  },
  {
    name: "Rockefeller Center Midtown"
  },
  {
    name: "Theater District / Times Square"
  },
  {
    name: "Turtle Bay"
  }
];

var generateData = function(object) {
  var newArray = [];
  for (var i = 0; i < object.length; i++) {
    newArray.push(object[i].name);
  }
  return newArray;
};

module.exports = generateData(data);
