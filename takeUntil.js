const takeUntil = function(array, callback) {
  const takeArr = [];
  // look at every element of the array
  for (element of array) {
    // run it through the callback function
    if (callback(element) === false) {
      // if the return value is false, push to new array 
      takeArr.push(element);
      // if the return value is true, stop 
    } else {
      return takeArr
    }
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);