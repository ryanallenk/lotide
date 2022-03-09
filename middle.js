const eqArrays = function (firstArr, secondArr) {
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


const assertArraysEqual = function (firstArr, secondArr) {
  if (eqArrays(firstArr, secondArr) === true) {
    console.log(`✅ Assertation Passed: ${firstArr} === ${secondArr}`);
  } else {
    console.log(`❌ Assertation Failed: ${firstArr} !== ${secondArr}`);
  }
};

const middle = function (array) {
  middleValue = []
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      middleValue.push(array[Math.floor(array.length / 2 - 1)]);
      middleValue.push(array[Math.floor(array.length / 2)]);
    } else {
      middleValue.push(array[Math.floor(array.length / 2)]);
    }
  }
  return middleValue;
};

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3])