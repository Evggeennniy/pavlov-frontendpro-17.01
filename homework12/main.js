// Homework12
function createSumFunction() {
  let prevNumber = 0;

  return function sum(num) {
    const result = prevNumber + num;
    prevNumber = result;
    return result;
  };
}

const sum = createSumFunction();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
