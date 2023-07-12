// 1)
/*
console.log("Hello".constructor.name);
console.log([1, 2, 3].constructor.name);
console.log({ name: "Srdjan" }.constructor.name);

// 2 - 6)
class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

let kitty = new Cat("Sophie");
kitty.greet();

// 7)
class Person {
  constructor(name = "John Doe") {
    this.name = name;
  }
}

let person1 = new Person();
let person2 = new Person("Pepe");

console.log(person1.name); // John Doe
console.log(person2.name); // Pepe
*/
