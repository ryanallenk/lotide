const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertation Failed: ${actual} !== ${expected}`);
  }
};

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
}

console.log(countLetters("lighthouse in the house"))