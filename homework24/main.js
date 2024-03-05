const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const sliderImage = document.getElementById("sliderImage");

// Список изображений
const images = [
  "./images/1.jpg",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
  "./images/5.jpg",
  "./images/6.jpg",
  "./images/7.jpg",
  "./images/8.jpg",
  "./images/9.jpg",
];
let currentImageIndex = 0;

// Функция для обновления изображения
function updateImage() {
  sliderImage.src = images[currentImageIndex];

  // Проверяем, нужно ли скрывать или показывать кнопки
  if (currentImageIndex === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  if (currentImageIndex === images.length - 1) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }
}

// Обработчик события для кнопки "Prev"
prevBtn.addEventListener("click", function () {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    updateImage();
  }
});

// Обработчик события для кнопки "Next"
nextBtn.addEventListener("click", function () {
  if (currentImageIndex < images.length - 1) {
    currentImageIndex++;
    updateImage();
  }
});

// Инициализация слайдера
updateImage();
