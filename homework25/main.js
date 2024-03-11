const createList = (array, depth = 0) => {
  // Создаем ul и индекс для нумерации
  const ul = document.createElement("ul");
  let index = 0;
  // Начинаем обход массива
  for (let outerElement of array) {
    // Создаем li
    const li = document.createElement("li");
    if (typeof outerElement == "object") {
      // Если объект является массивом вызываем себя
      li.append(createList(outerElement, depth + 1));
    } else {
      // В ином случае нумеруем объект
      index++;
      li.textContent = depth ? `${depth}.${index}` : index;
    }
    // Добавляем сформированный элемент в ul
    ul.append(li);
  }
  return ul;
};

const list = createList([
  1,
  2,
  3,
  [1, 2, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, [1, 2, 3, [1, 2]]], 3, 4, 5],
  4,
  5,
]);
document.body.append(list);
