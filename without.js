const without = function(source, itemsToRemove) {
  let withoutArr = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      withoutArr.push(source[i]);
    }
  }
  console.log(withoutArr);
}
module.exports = without;

// without([1, 2, 3], [1]); // should equal [2, 3]
// without(["1", "2", "3"], [1, 2, "3", 4]); // should equal ['1', '2']
// without(["1", "2", 4], [1, 2, "3", 4]); // should equal ['1', '2'] does not currently

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);