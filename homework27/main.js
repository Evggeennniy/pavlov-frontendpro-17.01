document.addEventListener("DOMContentLoaded", function () {
  const saveButton = document.getElementById("saveButton");
  saveButton.addEventListener("click", showTable);
});

function showTable() {
  const form = document.getElementById("registrationForm");
  const userDataDiv = document.getElementById("userData");
  const formData = new FormData(form);

  let tableHTML = "<table>";
  tableHTML += "<tr><th>Поле</th><th>Значення</th></tr>";

  for (const pair of formData.entries()) {
    tableHTML += "<tr><td>" + pair[0] + "</td><td>" + pair[1] + "</td></tr>";
  }

  tableHTML += "</table>";

  userDataDiv.innerHTML = tableHTML;
  form.reset(); // Очищення форми після відправлення
}
