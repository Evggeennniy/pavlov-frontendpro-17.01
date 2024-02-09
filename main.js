// function get_username() {
//   const username = prompt("What's your name?");
//   if (username !== null && username !== "") {
//     alert(`Hello, ${username}! How are you?`);
//   } else {
//     alert("You have to tell me your name!");
//     get_username();
//   }
// }

// // get_username();

// // Homework 3
// function calculate() {
//   const firstNumber = parseInt(prompt("Enter the first number"));
//   const secondNumber = parseInt(prompt("Enter the second number"));
//   alert(
//     `
//     ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}\n
//     ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}\n
//     ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}\n
//     ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}
//     `
//   );
// }

// // calculate();

// // Homework 4
// function calculate() {
//   const operationChoise = prompt("Select an action: add, sub, mult, div");
//   const firstNumber = parseInt(prompt("Enter the first number"));
//   const secondNumber = parseInt(prompt("Enter the second number"));

//   switch (operationChoise) {
//     case "add":
//       alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
//       break;
//     case "sub":
//       alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
//       break;
//     case "mult":
//       alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
//       break;
//     case "div":
//       alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
//       break;
//   }
// }

// // calculate();

// // Homework 5
// function homework5() {
//   const birthYear = parseInt(prompt("Tell me a year of your birthday"));
//   const whichCountry = prompt("What country do you live in ?");
//   const userSport = prompt("Enter your favorite sport");

//   const userAge =
//     !isNaN(birthYear) && birthYear !== null
//       ? "Your age is " + (2024 - birthYear)
//       : "It's a pity that you didn't want to say your birthday";

//   let userPlace;
//   if (["Kyiv", "Washington", "London"].includes(whichCountry)) {
//     userPlace = `You live in the capital of your country - ${whichCountry}`;
//   } else if (whichCountry !== null && whichCountry !== "") {
//     userPlace = `You live in ${whichCountry}`;
//   } else {
//     userPlace = "It's a pity that you didn't want to say where you live in";
//   }

//   let userIdol;
//   switch (userSport) {
//     case "box":
//       userIdol = "Do you want to become like Mike Tyson?";
//       break;
//     case "basketball":
//       userIdol = "Do you want to become like Michael Jordan?";
//       break;
//     case "football":
//       userIdol = "Do you want to become like Lionel Messi?";
//       break;
//     default:
//       userIdol = "It's a pity that you didn't want to say your sports idol";
//       break;
//   }

//   alert(`
//   ${userAge}
//   ${userPlace}
//   ${userIdol}
//   `);
// }

// // homework6();
// // let numOrStr = prompt("input number or string");
// // console.log(numOrStr);

// // switch (true) {
// //   case numOrStr === null:
// //     console.log("ви скасували");
// //     break;
// //   case numOrStr.trim() === "":
// //     console.log("Empty String");
// //     break;
// //   case isNaN(+numOrStr):
// //     console.log("number is Ba_NaN");
// //     break;
// //   default:
// //     console.log("OK!");
// // }

// // Homework 7
// const averageNumber = (...args) => {
//   return args.reduce((total, num) => total + num, 0) / args.length;
// }; // Решил сделать более универсальный вариант но не до конца разобрался в методе reduce

// // const num1 = parseFloat(prompt("input number 1"));
// // const num2 = parseFloat(prompt("input number 2"));
// // const num3 = parseFloat(prompt("input number 3"));

// // const result = averageNumber(num1, num2, num3);
// // alert(`average number is ${result}`);

// // Homework 8
// // 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
// const createRange = function (pointA, pointB, step = 1) {
//   const result = new Array();
//   while (pointA <= pointB) {
//     result.push(pointA);
//     pointA += step;
//   }
//   return result;
// };
// const resultbyTask1 = createRange(20, 30, 0.5).join(" ");
// console.log(resultbyTask1);

// // 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
// const dollarPrice = 27;
// const resultbyTask2 = createRange(10, 100, 10);
// resultbyTask2.forEach((element, index, array) => {
//   array[index] = element * dollarPrice;
// });
// console.log(resultbyTask2);

// // 3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
// const findNumbers = function (number) {
//   const numbersArray = new Array();
//   let numPossition = 1;
//   while (numPossition <= 100) {
//     if (numPossition ** 2 <= number) {
//       numbersArray.push(numPossition);
//       numPossition++;
//     } else {
//       break;
//     }
//   }
//   return numbersArray;
// };
// const resultbyTask3 = findNumbers(200);
// console.log(resultbyTask3);

// // 4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
// const isPrime = (number) => {
//   if (number <= 1) return false;

//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return false;
//   }

//   return true;
// };
// const resultbyTask4 = isPrime(5);
// console.log(resultbyTask4);

// // 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
// const ismadebyThree = (number) => {
//   if (number <= 0) return false;

//   while (number % 3 == 0) {
//     number /= 3;
//   }

//   return number == 1;
// };

// const resultbyTask5 = ismadebyThree(13);
// console.log(resultbyTask5);

// // Homework9
// const powCopy = (number, degree) => {
//   if (degree > 1) {
//     return powCopy(number, --degree) * number;
//   } else {
//     return number;
//   }
// };

// const result = powCopy(15, 5);
// console.log(result);

// // Homework9
// const users = [
//   {
//     index: 0,
//     isActive: true,
//     balance: "2226.60",
//     name: "Eugenia Sawyer",
//     gender: "female",
//     phone: "+1 (840) 583-3207",
//     address: "949 John Street, Rose, Puerto Rico, 1857",
//   },
//   {
//     index: 1,
//     isActive: true,
//     balance: "2613.77",
//     name: "Pauline Gallegos",
//     gender: "female",
//     phone: "+1 (985) 593-3328",
//     address: "328 Greenpoint Avenue, Torboy, North Dakota, 6857",
//   },
//   {
//     index: 2,
//     isActive: false,
//     balance: "3976.41",
//     name: "Middleton Chaney",
//     gender: "male",
//     phone: "+1 (995) 591-2478",
//     address: "807 Fleet Walk, Brutus, Arkansas, 9783",
//   },
//   {
//     index: 3,
//     isActive: true,
//     balance: "1934.58",
//     name: "Burns Poole",
//     gender: "male",
//     phone: "+1 (885) 559-3422",
//     address: "730 Seba Avenue, Osage, Alabama, 6290",
//   },
//   {
//     index: 4,
//     isActive: true,
//     balance: "3261.65",
//     name: "Mcfadden Horne",
//     gender: "male",
//     phone: "+1 (942) 565-3988",
//     address: "120 Scholes Street, Kirk, Michigan, 1018",
//   },
//   {
//     index: 5,
//     isActive: false,
//     balance: "1790.56",
//     name: "Suzette Lewis",
//     gender: "female",
//     phone: "+1 (837) 586-3283",
//     address: "314 Dunne Place, Bawcomville, Guam, 9053",
//   },
// ];

// // Фильтрация телефонных номеров тех у кто имеет > 2000
// const sortedUsers = users
//   .filter((user) => user.balance > 2000)
//   .map((user) => user.phone);
// console.log(sortedUsers);

// // Вычисление суммы всех балансов
// const usersBalances = new Array();
// users.forEach((user) => usersBalances.push(user["balance"]));
// const sumOfBalances = usersBalances.reduce(
//   (total, balance) => total + parseFloat(balance),
//   0
// );
// const resulthm9 = sumOfBalances.toFixed(2);
// console.log(resulthm9);

// Homework11
const removeElement = (array, element) => {
  delete array[array.indexOf(element)];
};

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]
