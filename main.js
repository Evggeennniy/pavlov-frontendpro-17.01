function get_username() {
  const username = prompt("What's your name?");
  if (username !== null && username !== "") {
    alert(`Hello, ${username}! How are you?`);
  } else {
    alert("You have to tell me your name!");
    get_username();
  }
}

// get_username();

// Homework 3
function calculate() {
  const firstNumber = parseInt(prompt("Enter the first number"));
  const secondNumber = parseInt(prompt("Enter the second number"));
  alert(
    `
    ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}\n
    ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}\n
    ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}\n
    ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}
    `
  );
}

// calculate();

// Homework 4
function calculate() {
  const operationChoise = prompt("Select an action: add, sub, mult, div");
  const firstNumber = parseInt(prompt("Enter the first number"));
  const secondNumber = parseInt(prompt("Enter the second number"));

  switch (operationChoise) {
    case "add":
      alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
      break;
    case "sub":
      alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
      break;
    case "mult":
      alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
      break;
    case "div":
      alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
      break;
  }
}

// calculate();

// Homework 5
function homework5() {
  const birthYear = parseInt(prompt("Tell me a year of your birthday"));
  const whichCountry = prompt("What country do you live in ?");
  const userSport = prompt("Enter your favorite sport");

  const userAge =
    !isNaN(birthYear) && birthYear !== null
      ? "Your age is " + (2024 - birthYear)
      : "It's a pity that you didn't want to say your birthday";

  let userPlace;
  if (["Kyiv", "Washington", "London"].includes(whichCountry)) {
    userPlace = `You live in the capital of your country - ${whichCountry}`;
  } else if (whichCountry !== null && whichCountry !== "") {
    userPlace = `You live in ${whichCountry}`;
  } else {
    userPlace = "It's a pity that you didn't want to say where you live in";
  }

  let userIdol;
  switch (userSport) {
    case "box":
      userIdol = "Do you want to become like Mike Tyson?";
      break;
    case "basketball":
      userIdol = "Do you want to become like Michael Jordan?";
      break;
    case "football":
      userIdol = "Do you want to become like Lionel Messi?";
      break;
    default:
      userIdol = "It's a pity that you didn't want to say your sports idol";
      break;
  }

  alert(`
  ${userAge}
  ${userPlace}
  ${userIdol}
  `);
}

// homework6();
// let numOrStr = prompt("input number or string");
// console.log(numOrStr);

// switch (true) {
//   case numOrStr === null:
//     console.log("ви скасували");
//     break;
//   case numOrStr.trim() === "":
//     console.log("Empty String");
//     break;
//   case isNaN(+numOrStr):
//     console.log("number is Ba_NaN");
//     break;
//   default:
//     console.log("OK!");
// }

// Homework 7
const averageNumber = (...args) => {
  return args.reduce((total, num) => total + num, 0) / args.length;
}; // Решил сделать более универсальный вариант но не до конца разобрался в методе reduce

const num1 = parseFloat(prompt("input number 1"));
const num2 = parseFloat(prompt("input number 2"));
const num3 = parseFloat(prompt("input number 3"));

const result = averageNumber(num1, num2, num3);
console.log(result);
