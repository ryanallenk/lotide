const findKeyByValue = function (object, value) {
  // scan the object for the value input
  for (const property in object) {
    // find the key with that value
    if (value === object[property]) {
      // return that value
      return property;
    }
  }
};
module.exports = findKeyByValue;

// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");