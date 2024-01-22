function get_username() {
  const username = prompt("What's your name?");
  if (username !== null && username !== "") {
    alert(`Hello, ${username}! How are you?`);
  } else {
    alert("You have to tell me your name!");
    get_username();
  }
}

get_username();
