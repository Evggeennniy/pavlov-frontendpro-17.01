// Получаем ссылки на текстовое поле и на <div>
let inputField = document.getElementById("myInput");
let messageDiv = document.getElementById("messageDiv");

inputField.addEventListener("focus", function () {
  messageDiv.style.display = "block";
});

inputField.addEventListener("blur", function () {
  messageDiv.style.display = "none";
});
