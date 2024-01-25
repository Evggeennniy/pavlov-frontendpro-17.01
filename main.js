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

calculate();
