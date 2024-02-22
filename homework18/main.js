class SpecialArray extends Array {
  constructor(maxLength, dataType) {
    super();

    // if (maxLength == undefined || dataType == undefined) {
    //   throw new Error("maxLength and dataType must be defined!");
    // }
    // ^^^
    // Хотел добавить вот такую небольшую обработку принятых аргументов
    // но почему то на вызове splice вылетала эта ошибка.
    // Почему может так произойти? Просто хотелось бы знать как он достает
    // конструктор в методе splice если сам по себе метод изменяет существующий массив?
    // Объясните пожалуйста коментом к ДЗ

    this.maxLength = maxLength;
    this.dataType = dataType;
  }

  #lengthController() {
    if (this.length > this.maxLength) {
      this.splice(0, this.length - this.maxLength);
    }
  }

  push(...elements) {
    for (let element of elements) {
      if (typeof element == this.dataType) {
        super.push(element);
      }
    }
    this.#lengthController();
  }
}

const array = new SpecialArray(10, "number");
array.push(5, 6, 4, "hello", true, 1, 3, 2);
console.log("Array: ", array);
array.sort();
console.log("Sorted array: ", array);
array.splice(1, 3);
console.log("Cutted array: ", array);
