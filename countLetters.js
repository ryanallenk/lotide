const countLetters = function(str) {
  let noSpaceString = str.split(" ").join("");
  // console.log(noSpaceString)
  letterCount = {};
  for (const letter of noSpaceString) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};

module.exports = countLetters;
