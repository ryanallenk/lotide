const assertEqual = require('./assertEqual');

const tail = function(array) {
  if (array.length >= 2){
    return array.slice(1,);
  }
  return array;
};

module.exports = tail;