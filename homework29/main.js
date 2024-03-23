// Phones
const iphone = {
  name: "iPhone",
  price: "250",
  imgUrl: "https://content.rozetka.com.ua/goods/images/big/364834229.jpg",
  description: "Отличный телефон ну просто класс",
};

const samsung = {
  name: "Samsung",
  price: "220",
  imgUrl: "https://content2.rozetka.com.ua/goods/images/big/409846880.jpg",
  description: "Отличный за свои деньги",
};

const sony = {
  name: "Sony",
  price: "190",
  imgUrl: "https://content2.rozetka.com.ua/goods/images/big/308403684.jpg",
  description: "Ну как бы тоже да",
};

// Laptops
const macbook = {
  name: "MacBook",
  price: "350",
  imgUrl: "https://content1.rozetka.com.ua/goods/images/big/144249716.jpg",
  description: "Для работы, учебы, и немного серфинга",
};

const asus = {
  name: "Asus",
  price: "320",
  imgUrl: "https://content2.rozetka.com.ua/goods/images/big/366137156.jpg",
  description: "Подходит к любому роду деятельности",
};

const lenovo = {
  name: "Lenovo",
  price: "310",
  imgUrl: "https://content1.rozetka.com.ua/goods/images/big/382257301.jpg",
  description: "Ну можно ютуб посмотреть",
};

// Имитация полученых данных с backend'a
const products = {
  phones: [iphone, samsung, sony],
  laptops: [macbook, asus, lenovo],
};

// Все важные элементы документа
const categoriesList = document.querySelector(".categories__list");
const productsList = document.querySelector(".products__list");
const productDetails = document.querySelector(".product-detail__card");
const showOrdersButton = document.querySelector(".page__show-orders-button");
let chosenProductList = undefined;
let chosenProduct = undefined;

let orderForm = undefined;

class CustomLocalStorage {
  constructor(key) {
    this.key = key;
    this.data = [];
  }

  addItem(item) {
    this.data.push(item);
    localStorage.setItem(this.key, JSON.stringify(this.data));
  }

  removeItem(index) {
    this.data.splice(index, 1);
    localStorage.setItem(this.key, JSON.stringify(this.data));
  }

  getData() {
    return this.data;
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

const ordersInStorage = new CustomLocalStorage("orders");

// Обработчик нажатия по категории
categoriesList.addEventListener("click", (event) => {
  const pressedElement = event.target;

  // Сначала проверяем, была ли нажата кнопка с информацией о заказе
  if (pressedElement.closest(".orders-history__order-button")) {
    const infoObj = pressedElement.parentElement.querySelector(
      ".orders-history__order-moreinfo"
    );

    // Переключаем видимость информации о заказе
    infoObj.style.display = infoObj.style.display === "block" ? "" : "block";
  }
  // Затем проверяем, была ли нажата ссылка категории
  else if (pressedElement.closest(".category__link")) {
    const categoryPressed = pressedElement.closest(".category__link");
    const newChosenProductList =
      products[categoryPressed.getAttribute("category")];

    // Проверяем, изменился ли список продуктов
    if (chosenProductList === newChosenProductList) return;
    chosenProductList = newChosenProductList;

    // Очищаем текущий список продуктов и детали продукта
    productsList.innerHTML = "";
    productDetails.innerHTML = "";

    // Генерируем новый список продуктов
    chosenProductList.forEach((product, productId) => {
      const productItem = document.createElement("li");
      productItem.classList.add("products__list-product");
      productItem.setAttribute("product_id", productId);
      productItem.innerHTML = `
            <h5 class="product__header">${product.name}</h5>
            <img class="product__img" src="${product.imgUrl}" alt="Product Image">
            <p class="product__price">${product.price}$</p>
            <button class="product__detail">Детали</button>
          `;

      productsList.appendChild(productItem);
    });
  } else if (pressedElement.closest(".orders-history__order-button-remove")) {
    const parentElement = pressedElement.parentElement;
    const productId = parentElement.getAttribute("order-id");

    ordersInStorage.removeItem(productId);
    parentElement.remove();
  }
});

const cleanPage = () => {
  productDetails.innerHTML = "";
  productsList.innerHTML = "";
  orderForm.remove();
  chosenProduct = undefined;
  chosenProductList = undefined;
};

const scrollToObj = (className) => {
  const formElement = document.querySelector(className);
  if (formElement) {
    formElement.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    console.error(className, "не найдено");
  }
};

function formatDateTimeString(date) {
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const formattedDateTime = new Date(date).toLocaleDateString(
    undefined,
    options
  );
  return formattedDateTime;
}

const createOrder = (formObj) => {
  const order = {};

  // Добавляем данные из полей формы в объект order
  order.fullName = formObj.querySelector("#fullname").value;
  order.city = formObj.querySelector("#city").value;
  order.postOffice = formObj.querySelector("#service").value;
  order.payment = formObj.querySelector('input[name="payment"]:checked').value;
  order.productCount = formObj.querySelector("#product-count").value;
  order.note = formObj.querySelector("#note").value;
  order.product = chosenProduct;
  order.date = formatDateTimeString(new Date());

  return order; // Возвращаем объект order
};

const isValid = (formObj) => {
  const requiredFields = formObj.querySelectorAll(
    "input[required], select[required], textarea[required]"
  );

  for (let field of requiredFields) {
    if (!field.value) {
      field.focus();
      return false;
    }
  }
  return true;
};

const buyProduct = (event) => {
  event.preventDefault();
  const formObj = document.querySelector(".order-form");
  if (isValid(formObj)) {
    newOrder = createOrder(formObj);
    ordersInStorage.addItem(newOrder);

    alert(`
    Заказ оформлен.
    Продукт: ${newOrder.product.name}
    Коль-во: ${newOrder.productCount}
    Cтоимость: ${parseInt(newOrder.product.price) * newOrder.productCount}

    Доставка.
    ФИО: ${newOrder.fullName}
    Город: ${newOrder.city}
    Почта: ${newOrder.postOffice}
    Оплата: ${newOrder.payment}

    `);
    cleanPage();
  }
};

const createForm = () => {
  // Если форма уже существует
  const formOnPage = document.querySelector(".order-form");
  if (formOnPage) {
    const header = formOnPage.querySelector(".order-form__product");
    header.textContent = chosenProduct.name;
  } else {
    const formContent = `
    <div class="order-form__product">
      <header class="order-form__product-header">${chosenProduct.name}</header>
    </div>
    <label for="fullname" class="required-field">ПIБ:</label>
    <input
      type="text"
      id="fullname"
      name="fullname"
      placeholder="Кривий Андрiй Козаченко" 
      required
    />

    <label for="city" class="required-field">Місто:</label>
    <select id="city" name="city" required>
      <option value="">Оберіть місто</option>
      <option value="kyiv">Київ</option>
      <option value="lviv">Львів</option>
      <option value="kharkiv">Харків</option>
      <option value="odesa">Одеса</option>
    </select>

    <label for="service" class="required-field">Склад пошти:</label>
    <input
      type="text"
      id="service"
      name="service"
      placeholder="№4 улица Филипинова"
      required
    />

    <label for="product-count" class="required-field">Кiль-сть:</label>
    <input min="1" type="number" id="product-count" name="product-count" value="1" required/>

    <label>Оплата:</label>
    <input type="radio" id="pay-on-mail" name="payment" value="pay after deliver" checked />
    <label for="pay-on-mail">Оплата на поштi</label>
    <input type="radio" id="pay-with-card" name="payment" value="pay with a card" />
    <label for="pay-with-card">Оплата картою</label>

    <label for="note">Коментар:</label>
    <input
      type="text"
      id="note"
      name="note"
      placeholder="Хочу курьером до ..."
    />
    <button type="submit" class="buy">Заказ</button>`;

    const formObj = document.createElement("form");
    formObj.classList.add("order-form");
    formObj.innerHTML = formContent;
    document.body.append(formObj);

    const button = document.body.querySelector(".buy");
    button.addEventListener("click", buyProduct);

    orderForm = formObj;
  }
  scrollToObj(".order-form");
};

// Обработчик нажатия по продукту
productsList.addEventListener("click", (event) => {
  const productPressed = event.target.closest(".product__detail");

  if (!productPressed) return;

  const newProductId = event.target.parentElement.getAttribute("product_id");
  const newChosenProduct = chosenProductList[newProductId];

  // Если продукт тот же самый
  if (chosenProduct === newChosenProduct) return;
  chosenProduct = newChosenProduct;

  productDetails.innerHTML = `
    <div class="product-detail__info" product_id="${newProductId}">
      <h3 class="product-detail__header">${newChosenProduct.name}</h3>
      <img class="product-detail__img" src="${newChosenProduct.imgUrl}" alt="Product Image">
      <p class="product-detail__price">${newChosenProduct.price}$</p>
      <p class="product-detail__description">${newChosenProduct.description}</p>
      <button class="product-detail__buy">Купить</button>
    </div>
    `;

  const buyButton = document.querySelector(".product-detail__buy");
  buyButton.addEventListener("click", createForm);
});

showOrdersButton.addEventListener("click", (event) => {
  if (ordersInStorage.isEmpty()) {
    alert("У вас нет заказов");
    return;
  }

  let ordersHistoryObj = categoriesList.querySelector(".orders-history");
  if (!ordersHistoryObj) {
    ordersHistoryObj = document.createElement("ul");
    ordersHistoryObj.classList.add("orders-history");
  } else {
    ordersHistoryObj.innerHTML = "";
  }

  allOrders = ordersInStorage.getData();
  allOrders.forEach((currentOrder, itemIndex) => {
    const orderObj = document.createElement("li");
    orderObj.classList.add("orders-history__order");
    orderObj.setAttribute("order-id", itemIndex);
    orderObj.innerHTML = `
      <strong>Заказ: #${itemIndex + 1}</strong>
      <h3 class="orders-history__order-header">Дата: ${currentOrder.date}</h3>
      <p class="orders-history__order-price">Цена: ${
        currentOrder.product.price * currentOrder.productCount
      }$</p>
      <button class="orders-history__order-button">Инфо</button>
      <div class="orders-history__order-moreinfo">
        <p class="orders-history__order-name">Продукт: ${
          currentOrder.product.name
        }</p>
        <p class="orders-history__order-count">Коль-во: ${
          currentOrder.productCount
        }</p>
        <p class="orders-history__order-priceperone">Цена за единицу: ${
          currentOrder.product.price
        }</p>
        <p class="orders-history__order-desc">Описание: ${
          currentOrder.product.description
        }</p>
      </div>
      <button class="orders-history__order-button-remove">Удалить</button>
    `;
    ordersHistoryObj.append(orderObj);
  });

  categoriesList.innerHTML = "";
  categoriesList.append(ordersHistoryObj);
});
