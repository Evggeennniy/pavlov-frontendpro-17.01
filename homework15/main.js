class People {
  constructor(name, gender) {
    this.name = name;
    this.gerned = gender;
  }
}

class Apartment {
  residents = new Array();

  addResident(residents) {
    this.residents.push(residents);
  }
}

class House {
  apartments = new Array();

  constructor(maxApartments = 10) {
    this.maxApartments = maxApartments;
  }

  addApartment(...newApartments) {
    if (this.apartments.length + newApartments.length <= this.maxApartments) {
      this.apartments.push(...newApartments);
    } else {
      console.log("The maximum number of apartments has been reached");
    }
  }
}

const people1 = new People("Goga", "male");
const people2 = new People("Boba", "male");
const people3 = new People("Shmonka", "female");
const people4 = new People("Piska", "female");

const apartments1 = new Apartment();
apartments1.addResident(people1, people2);

const apartments2 = new Apartment();
apartments2.addResident(people3, people4);

const apartments3 = new Apartment();
apartments2.addResident(people1, people2, people3, people4);

const house1 = new House(2);
house1.addApartment(apartments1, apartments2);
console.log("1. Создан экземпляр дома и забит до максимума");
console.log(house1);
console.log("2. Пробуем добавить ещё апартаменты");
house1.addApartment(apartments3);
console.log(house1);
