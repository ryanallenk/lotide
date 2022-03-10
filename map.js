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



const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array){
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);

const results2 = map(["1fish", "2fish", "3fish", "4fish", "5fish"], word => word[0])

const results3 = map(["Ryan", "Jean", "Bob", "Dan"], word => word + " Kidd")



assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, ["1", "2", "3", "4", "5"]);
assertArraysEqual(results3, ["Ryan Kidd", "Jean Kidd", "Bob Kidd", "Dan Kidd"]);
