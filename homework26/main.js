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
  productDetails.innerHTML = "";
  productsList.innerHTML = "";
  chosenProduct = undefined;
  chosenProductList = undefined;
};

const productWasBought = () => {
  alert("Продукт был куплен");
  // Очистка после покупки
  cleanPage();
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
  buyButton.addEventListener("click", productWasBought);
});
