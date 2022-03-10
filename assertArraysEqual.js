const assertArraysEqual = function(firstArr, secondArr) {
  if (eqArrays(firstArr, secondArr) === true) {
    console.log(`✅ Assertation Passed: ${firstArr} === ${secondArr}`);
  } else {
    console.log(`❌ Assertation Failed: ${firstArr} !== ${secondArr}`);
  }
};

const eqArrays = function(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return false;
  } else {
    for (let i = 0; i < firstArr.length; i++) {
      if (firstArr[i] !== secondArr[i]) {
      return false;
      } else {
        return true;
      }
    }  
  } 
};


assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [1,2,3,4]);