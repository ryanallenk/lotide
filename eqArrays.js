const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertation Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(firstArr, secondArr) {
  let equal = ""
  if (firstArr.length !== secondArr.length) {
    equal = false;
  } else {
    for (let i = 0; i < firstArr.length; i++) {
      if (firstArr[i] === secondArr[i]) {
      equal = true;
      } else {
        equal = false;
      }
    }  
  } 
  return equal
};
console.log(eqArrays([1, 2, 3, 4], [1, 2, 3]));
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS