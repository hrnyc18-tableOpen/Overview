var data = {
  "selection1": [
   {
    "name": "Authentic"
   },
   {
    "name": "Bar Seating"
   },
   {
    "name": "Book the Bar"
   },
   {
    "name": "Cellar"
   },
   {
    "name": "Charming"
   },
   {
    "name": "Check the Wait"
   },
   {
    "name": "Comfort Food"
   },
   {
    "name": "Convenient"
   },
   {
    "name": "Couples"
   },
   {
    "name": "Cozy"
   },
   {
    "name": "Craft Beer Selection"
   },
   {
    "name": "Creative Cuisine"
   },
   {
    "name": "Dancing"
   },
   {
    "name": "Earn Bonus Points"
   },
   {
    "name": "Eater's Essential Restaurants"
   },
   {
    "name": "Families"
   },
   {
    "name": "Family Style"
   },
   {
    "name": "Farm To Table"
   },
   {
    "name": "Father's Day"
   },
   {
    "name": "Fireplace"
   },
   {
    "name": "Fit for Foodies"
   },
   {
    "name": "Formal"
   },
   {
    "name": "Fried Food"
   },
   {
    "name": "Gluten Free Options"
   },
   {
    "name": "Good Value"
   },
   {
    "name": "Good for Anniversaries"
   },
   {
    "name": "Good for Birthdays"
   },
   {
    "name": "Good for Groups"
   },
   {
    "name": "Good for a Business Meeting"
   },
   {
    "name": "Good for a Date"
   },
   {
    "name": "Great Beer"
   },
   {
    "name": "Great Service"
   },
   {
    "name": "Great for Brunch"
   },
   {
    "name": "Great for Lunch"
   },
   {
    "name": "Handcrafted Cocktails"
   },
   {
    "name": "Happy Hour"
   },
   {
    "name": "Healthy"
   },
   {
    "name": "High Ceilings"
   },
   {
    "name": "Historic"
   },
   {
    "name": "Hot Spot"
   },
   {
    "name": "Kid-friendly"
   },
   {
    "name": "Live Music"
   },
   {
    "name": "Modern Decor"
   },
   {
    "name": "Mother's Day"
   },
   {
    "name": "NYC Restaurant Week"
   },
   {
    "name": "Neighborhood Gem"
   },
   {
    "name": "New & Hot"
   },
   {
    "name": "Notable Wine List"
   },
   {
    "name": "Open Kitchen"
   },
   {
    "name": "OpenTable Picks"
   },
   {
    "name": "Organic"
   },
   {
    "name": "Outdoor Seating"
   },
   {
    "name": "Paleo Friendly"
   },
   {
    "name": "People Watching"
   },
   {
    "name": "Premium Access"
   },
   {
    "name": "Private Room"
   },
   {
    "name": "Prix Fixe Menu"
   },
   {
    "name": "Quick Bite"
   },
   {
    "name": "Quiet Conversation"
   },
   {
    "name": "Recommended for Travelers"
   },
   {
    "name": "Romantic"
   },
   {
    "name": "Scenic View"
   },
   {
    "name": "Seasonal"
   },
   {
    "name": "Speakeasy"
   },
   {
    "name": "Special Occasion"
   },
   {
    "name": "Spicy"
   },
   {
    "name": "TV"
   },
   {
    "name": "Tapas"
   },
   {
    "name": "Tasting Menu"
   },
   {
    "name": "Tourists"
   },
   {
    "name": "Upscale"
   },
   {
    "name": "Valentine's Day"
   },
   {
    "name": "Vegan"
   },
   {
    "name": "Vibrant Bar Scene"
   },
   {
    "name": "Wood Oven"
   }]
 }

var generateData = function(object) {
  var array = object.selection1;
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i].name)
  }
  return newArray;
}

module.exports = generateData(data);
