
const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results.hasOwnProperty(sentence[i])) {
        results[sentence[i]] = results[sentence[i]].concat(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};
module.exports = letterPositions;
// console.log(letterPositions("lighthouse in the house"));
// assertArraysEqual(letterPositions("lighthouse in the house").l, [0]);
// assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]);