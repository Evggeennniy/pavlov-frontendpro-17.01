// Создание объекта XMLHttpRequest
const weatherInfo = new XMLHttpRequest();

// Функция для создания и добавления таблицы с информацией о погоде в DOM
function createWeatherTable(data) {
  const table = document.createElement("table");
  table.style.width = "100%";
  table.setAttribute("border", "1");
  table.setAttribute("cellspacing", "0");
  table.setAttribute("cellpadding", "5");

  const thead = document.createElement("thead");
  table.appendChild(thead);

  const headerRow = document.createElement("tr");
  thead.appendChild(headerRow);

  // Заголовки для таблицы
  const headers = [
    "Город",
    "Температура",
    "Давление",
    "Описание",
    "Влажность",
    "Скорость ветра",
    "Направление ветра",
    "Иконка",
  ];
  headers.forEach((headerText) => {
    const header = document.createElement("th");
    header.textContent = headerText;
    headerRow.appendChild(header);
  });

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  const row = tbody.insertRow();
  row.insertCell().textContent = data.name;
  row.insertCell().textContent = `${data.main.temp} °C`;
  row.insertCell().textContent = `${data.main.pressure} гПа`;
  row.insertCell().textContent = data.weather[0].description;
  row.insertCell().textContent = `${data.main.humidity}%`;
  row.insertCell().textContent = `${data.wind.speed} м/с`;
  row.insertCell().textContent = `${data.wind.deg}°`;

  const iconCell = row.insertCell();
  const iconImg = document.createElement("img");
  iconImg.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  iconCell.appendChild(iconImg);

  // Добавляем таблицу в конец элемента body
  document.body.appendChild(table);
}

// Установка обработчика событий для отслеживания изменения состояния запроса
weatherInfo.onreadystatechange = function () {
  if (weatherInfo.readyState === XMLHttpRequest.DONE) {
    // Запрос завершен
    if (weatherInfo.status === 200) {
      // Успешный ответ от сервера
      const responseJson = JSON.parse(weatherInfo.response);
      // Создание и добавление таблицы с информацией о погоде
      createWeatherTable(responseJson);
    } else {
      console.error("Произошла ошибка при запросе:", weatherInfo.status);
    }
  }
};

// Открытие запроса (метод GET, адрес URL)
weatherInfo.open(
  "GET",
  "https://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19",
  true
);

// Отправка запроса
weatherInfo.send();
