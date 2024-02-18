class LimitedArray extends Array {
  constructor(maxLength = 10) {
    super();
    this.maxLength = maxLength;
  }

  __lengthController__() {
    if (this.length > this.maxLength) {
      this.splice(0, this.length - this.maxLength);
    }
  }

  push(...elements) {
    super.push(...elements);
    this.__lengthController__();
  }
}

class Student {
  grades = new Array();
  attendance = new LimitedArray(25);

  constructor(name, surname, birthday) {
    this.name = name;
    this.surname = surname;
    this.birthday = birthday;
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthday;
  }

  present() {
    this.attendance.push(true);
  }

  absent() {
    this.attendance.push(false);
  }

  getAverageGrade() {
    const averageGrade =
      this.grades.reduce(function (total, current) {
        return total + current;
      }, 0) / this.grades.length;

    return averageGrade;
  }

  getAverageAttendance() {
    const averageAttendance = this.attendance.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue),
      0
    );

    return averageAttendance / this.attendance.length;
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const averageAttendance = this.getAverageAttendance();

    console.log(averageGrade, averageAttendance);

    if (averageGrade > 90 && averageAttendance > 0.9) {
      console.log("Молодець!");
    } else if (averageGrade > 90 || averageAttendance > 0.9) {
      console.log("Добре, але можна краще");
    } else {
      console.log("Редиска!");
    }
  }
}

const student1 = new Student("Иван", "Петров", 1998);
console.log(`1. Студент ${student1.name} ${student1.surname}`);
student1.grades = [90, 85, 95, 90, 92]; // Оценки
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.summary();

console.log("------------------------");

const student3 = new Student("Dodik", "Detrov", 2000);
console.log(`2. Студент ${student3.name} ${student3.surname}`);
student3.grades = [60, 60, 70, 60, 80]; // Оценки
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.summary();

console.log("------------------------");

const student2 = new Student("Елена", "Сидорова", 1999);
console.log(`3. Студент ${student2.name} ${student2.surname}`);
student2.grades = [75, 80, 70, 85, 78]; // Оценки
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.present();
student2.summary();
