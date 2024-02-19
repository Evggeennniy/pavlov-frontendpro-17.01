array = [
  42,
  "Hello",
  true,
  null,
  34,
  87,
  3.14,
  { hello: "hello" },
  2,
  5,
  19,
  [1, 3, 5],
];

const averageOfNumbers = (array) => {
  result = array.reduce(function (accumulator, current) {
    return typeof current == "number" ? accumulator + current : accumulator;
  }, 0);
  return result / array.length;
};

res = averageOfNumbers(array);
console.log(res);
