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

calculate();
