const rokket = (array) => {
  return array.reduce((previous, current) => {
    if (previous.length > current.length) {
      return previous;
    }
    return current;
  });
};

const list = ["best", "comppany", "ever"];

console.log(rokket(list));


// run node LongestString.js 