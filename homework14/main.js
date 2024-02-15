class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  isAdult() {
    return this.age >= 18 ? true : false;
  }
  showInfo() {
    console.log(`Person name: ${this.name} age: ${this.age}`);
  }
}

class Car {
  owner = undefined;

  constructor(brand, model, year, number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.number = number;
  }
  setOwner(newOwner) {
    if (newOwner.isAdult()) {
      this.owner = newOwner;
    } else {
      console.log("The person hasn't 18 years old");
    }
  }
  showInfo() {
    console.log(
      `Car brand: ${this.brand}, model: ${this.model}, year: ${this.year}`
    );

    this.owner != undefined
      ? this.owner.showInfo()
      : console.log("This car has not an owner yet");
  }
}

const personOne = new Person("Maks", 18);
const personTwo = new Person("Josh", 78);
const personThree = new Person("Dodik", 13);

const carOne = new Car("bmw", "x5", 2020, "BH3048");
const carTwo = new Car("audi", "mamba x3", 2001, "BH3025");
const carThree = new Car("kia", "rio", 2015, "BH3057");

carOne.setOwner(personOne);
carOne.showInfo();
console.log("-------------------");
carTwo.setOwner(personTwo);
carTwo.showInfo();
console.log("-------------------");
carThree.setOwner(personThree);
carThree.showInfo();
