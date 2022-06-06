const inputArr = process.argv.slice(2);

const pigLatin = () => {
  const pigArr = [];
  for (let input of inputArr) {
    const endChar = input.charAt(0);
    let newStr = input.slice(1).concat(endChar, "ay");
    pigArr.push(newStr)
  }
  return pigArr.join(' ');
};
