// 1 - 4)
/*
class Vehicle {
  constructor(year) {
    this.year = year;
  }

  startEngine() {
    return "Ready to go!";
  }
}

class Truck extends Vehicle {
  constructor(year, bedType) {
    super(year);
    this.bedType = bedType;
  }

  startEngine(speed) {
    return `Ready to go! Drive ${speed} please!`;
  }
}

class Car extends Vehicle {}

let truck1 = new Truck();
console.log(truck1.startEngine("fast"));

let truck2 = new Truck();
console.log(truck2.startEngine("slow"));

let car = new Car(2015);
console.log(car.year); // 2015

// 5)
class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello! My name is ${this.name}!`;
  }
}

const walkMixIn = {
  walk: function () {
    return "Let's go for a walk!";
  },
};

Object.assign(Cat.prototype, walkMixIn);

let kitty = new Cat("Sophie");
console.log(kitty.greet());
console.log(kitty.walk());

// 6)
const swimMixin = {
  swim() {
    return `${this.name} is swimming.`;
  },
};

class Fish {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Fish.prototype, swimMixin);

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Maltese extends Dog {}

Object.assign(Maltese.prototype, swimMixin);

let dog1 = new Maltese("Buddy");
let fish1 = new Fish("Nemo");

console.log(dog1.swim());
console.log(fish1.swim());
*/

// 7 - 8)
class Vehicle {
  constructor(year) {
    this.year = year;
  }
}
class Truck extends Vehicle {}

const towMixIn = {
  tow() {
    return "I can tow a trailer!";
  },
};

Object.assign(Truck.prototype, towMixIn);

class Car extends Vehicle {}

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);
