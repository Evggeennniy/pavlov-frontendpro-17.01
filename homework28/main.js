// Phones
const iphone = {
  name: "iPhone",
  price: "250$",
  imgUrl: "https://content.rozetka.com.ua/goods/images/big/364834229.jpg",
  description: "Отличный телефон ну просто класс",
};

const samsung = {
  name: "Samsung",
  price: "220$",
  imgUrl: "https://content2.rozetka.com.ua/goods/images/big/409846880.jpg",
  description: "Отличный за свои деньги",
};

const sony = {
  name: "Sony",
  price: "190$",
  imgUrl: "https://content2.rozetka.com.ua/goods/images/big/308403684.jpg",
  description: "Ну как бы тоже да",
};

// Laptops
const macbook = {
  name: "MacBook",
  price: "350$",
  imgUrl: "https://content1.rozetka.com.ua/goods/images/big/144249716.jpg",
  description: "Для работы, учебы, и немного серфинга",
};

const asus = {
  name: "Asus",
  price: "320$",
  imgUrl: "https://content2.rozetka.com.ua/goods/images/big/366137156.jpg",
  description: "Подходит к любому роду деятельности",
};

const lenovo = {
  name: "Lenovo",
  price: "310$",
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
let chosenProductList = undefined;
let chosenProduct = undefined;

let orderForm = undefined;
let order = {};

// Обработчик нажатия по категории
categoriesList.addEventListener("click", (event) => {
  const categoryPressed = event.target.closest(".category__link");

  if (!categoryPressed) return;

  const newChosenProductList = products[event.target.getAttribute("category")];

  // Если список продуктов тот же самый
  if (chosenProductList === newChosenProductList) return;
  chosenProductList = newChosenProductList;

  productsList.innerHTML = "";
  productDetails.innerHTML = "";

  chosenProductList.forEach((product) => {
    const productItem = document.createElement("li");
    productItem.classList.add("products__list-product");

    productItem.innerHTML = `
          <h5 class="product__header">${product.name}</h5>
          <img class="product__img" src="${product.imgUrl}" alt="Product Image">
          <p class="product__price">${product.price}</p>
          <button class="product__detail" product_id="${chosenProductList.indexOf(
            product
          )}"
          )}">Детали</button>
        `;

    productsList.appendChild(productItem);
  });
});

const cleanPage = () => {
  productDetails.remove();
  productsList.remove();
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

const addDataToOrder = (formObj) => {
  // Добавляем данные из полей формы в объект order
  order.fullName = formObj.querySelector("#fullname").value;
  order.city = formObj.querySelector("#city").value;
  order.postOffice = formObj.querySelector("#service").value;
  order.payment = formObj.querySelector('input[name="payment"]:checked').value;
  order.productCount = formObj.querySelector("#product-count").value;
  order.note = formObj.querySelector("#note").value;
  order.product = chosenProduct;

  return order; // Возвращаем объект order
};

const validateForm = (formObj) => {
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
  if (validateForm(formObj)) {
    addDataToOrder(formObj);
    alert(`
    Заказ оформлен.
    Продукт: ${order.product.name}
    Коль-во: ${order.productCount}
    Cтоимость: ${parseInt(order.product.price) * order.productCount}

    Доставка.
    ФИО: ${order.fullName}
    Город: ${order.city}
    Почта: ${order.postOffice}
    Оплата: ${order.payment}

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

  const newProductId = event.target.getAttribute("product_id");
  const newChosenProduct = chosenProductList[newProductId];

  // Если продукт тот же самый
  if (chosenProduct === newChosenProduct) return;
  chosenProduct = newChosenProduct;

  productDetails.innerHTML = `
    <div class="product-detail__info" product_id="${newProductId}">
      <h3 class="product-detail__header">${newChosenProduct.name}</h3>
      <img class="product-detail__img" src="${newChosenProduct.imgUrl}" alt="Product Image">
      <p class="product-detail__price">${newChosenProduct.price}</p>
      <p class="product-detail__description">${newChosenProduct.description}</p>
      <button class="product-detail__buy">Купить</button>
    </div>
    `;

  const buyButton = document.querySelector(".product-detail__buy");
  buyButton.addEventListener("click", createForm);
});

// Робимо на підставі минулого дз.

// В інформації товару - кнопка "купити".
// При натисканні на "купити" нижче з'являється форма оформлення замовлення з наступними полями:
// ПІБ покупця
// Місто (вибір зі списку)
// Склад Нової пошти для надсилання
// Післяплати або оплати банківської картки
// Кількість продукції, що купується
// Коментар до замовлення
// 2. Реалізувати перевірку всіх даних користувача під час підтвердження замовлення - обов'язкові поля заповнені. Інакше - виводити помилку на сторінку

// 3. Виводити інформацію про замовлення на сторінку (інформація про товар та про доставку)
