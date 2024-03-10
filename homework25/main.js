const createList = (array) => {
  const ul = document.createElement("ul");
  for (let outerElement of array) {
    const li = document.createElement("li");
    if (typeof outerElement == "object") {
      const innerUl = createList(outerElement);
      li.append(innerUl);
    } else {
      li.innerHTML = outerElement;
    }
    ul.append(li);
  }
  return ul;
};

const list = createList([1, 2, 3, [4.1, 4.2], 5, 6, [7.1, 7.2, [8.1, 8.2]]]);
document.body.append(list);
