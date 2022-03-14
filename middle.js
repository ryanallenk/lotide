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



module.exports = middle; 