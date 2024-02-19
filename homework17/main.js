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
  const sumAndCount = array.reduce(
    function (accumulator, current) {
      if (typeof current === "number") {
        accumulator.sum += current;
        accumulator.count++;
      }
      return accumulator;
    },
    { sum: 0, count: 0 }
  );

  if (sumAndCount.count === 0) {
    return 0; // Если нет чисел, возвращаем 0, чтобы избежать деления на 0.
  }

  return sumAndCount.sum / sumAndCount.count;
};

res = averageOfNumbers(array);
console.log(res);
