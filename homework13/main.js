// Homework13

let ladder = {
  step: 0,
  up: function () {
    this.step++;
    return this;
  },
  down: function () {
    this.step--;
    return this;
  },
  showStep: function () {
    // показывает текущую ступеньку
    alert(`You're on the ${this.step}-th step`);
  },
};

result = ladder.up().up().down().showStep(); // 1

console.log();
