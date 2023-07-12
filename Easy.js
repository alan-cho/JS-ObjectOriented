// 1)
/*
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.length * this.width;
  }
}

let rect = new Rectangle(4, 5);

console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20

// 2)
class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25

// 3)
class Cat {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowwww.`;
  }
}

let fakeCat = Object.create(Cat.prototype);
console.log(fakeCat instanceof Cat); // logs true
console.log(fakeCat.name); // logs undefined
console.log(fakeCat.speaks()); // logs undefined says meowwww

// 4)
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Pet {
  constructor(name, age, fur) {
    super(name, age);
    this.fur = fur;
  }

  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.fur} fur.`;
  }
}

let pudding = new Cat("Pudding", 7, "black and white");
let butterscotch = new Cat("Butterscotch", 10, "tan and white");

console.log(pudding.info());
console.log(butterscotch.info());

// 5)
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "Cat", status);
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}. Meow meow!`;
  }
}

let cat = new Cat("Pepe", 2, "happy");
console.log(
  cat.introduce() ===
    "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!"
);

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "Dog", status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}! Woof woof!`;
  }
}

// 6)
class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  getWheels() {
    return this.wheels;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, wheels) {
    super(make, model, wheels);
  }
}

class Motorcycle {
  constructor(make, model, wheels) {
    super(make, model, wheels);
  }
}

class Truck {
  constructor(make, model, wheels, payload) {
    super(make, model, wheels);
    this.payload = payload;
  }
}

// 7) SKIPPED

// 8)
class Person {
  greeting(text) {
    console.log(text);
  }
}

class Shouter extends Person {
  greeting(text) {
    super.greeting(text.toUpperCase());
  }
}

let person = new Person();
let shouter = new Shouter();

person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
shouter.greeting("Hello my friend."); // HELLO MY FRIEND.

// 9)
const walkMixIn = {
  walk() {
    return `${this.name} ${this.gait()} forward.`;
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "strolls";
  }
}

Object.assign(Person.prototype, walkMixIn);

class Cat {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "saunters";
  }
}

Object.assign(Cat.prototype, walkMixIn);

class Cheetah {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "runs";
  }
}

Object.assign(Cheetah.prototype, walkMixIn);

let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk());
// "Flash runs forward"

// 10)
class Pet {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = {};
  }

  numberOfPets() {
    return Object.keys(this.pets).length;
  }
}

class Shelter {
  constructor() {
    this.owners = [];
  }

  adopt(owner, pet) {
    owner.pets[pet.name] = pet.species;

    if (!this.owners.includes(owner)) {
      this.owners.push(owner);
    }
  }

  printAdoptions() {
    console.log(this.owners);
    for (let owner of this.owners) {
      console.log(`${owner.name} has the following pets: `);
      for (let pet in owner.pets) {
        console.log(`A ${owner.pets[pet]} named ${pet}.`);
      }
    }
  }
}

let butterscotch = new Pet("cat", "Butterscotch");
let pudding = new Pet("cat", "Pudding");
let darwin = new Pet("bearded dragon", "Darwin");
let kennedy = new Pet("dog", "Kennedy");
let sweetie = new Pet("parakeet", "Sweetie Pie");
let molly = new Pet("dog", "Molly");
let chester = new Pet("fish", "Chester");

let phanson = new Owner("P Hanson");
let bholmes = new Owner("B Holmes");

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);


P Hanson has adopted the following pets:
a cat named Butterscotch
a cat named Pudding
a bearded dragon named Darwin

B Holmes has adopted the following pets:
a dog named Molly
a parakeet named Sweetie Pie
a dog named Kennedy
a fish named Chester

P Hanson has 3 adopted pets.
B Holmes has 4 adopted pets.
*/
