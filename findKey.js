const findKey = function (object, callback) {
  // look through all the properties of the object
  for (let property in object) {
    // run the callback function (which looks at the value of the "stars" property in the object pairing) and look for a match ("true")
    if (callback(object[property])) {
      // if a match is found, return that property
      return property
    }
  }
};
module.exports = findKey;

// assertEqual((findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2)), "noma")

// assertEqual((findKey({
//   "Brad": { age: 17 },
//   "Lauren": { age: 28 },
//   "Ryan":   { age: 29 },
//   "Chad": { age: 60 },
// }, x => x.age === 29)), "Ryan")

// assertEqual((findKey({
//   "Brad": { age: 17 },
//   "Lauren": { age: 28 },
//   "Ryan":   { age: 29 },
//   "Chad": { age: 60 },
// }, x => x.age === 30)), "Ryan")