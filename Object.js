// 1)
/*
function createGreeter(name) {
  return {
    name: name,
    morning: "Good Morning",
    afternoon: "Good Afternoon",
    evening: "Good Evening",

    greet: function (timeOfDay) {
      let msg = "";
      switch (timeOfDay) {
        case "morning":
          msg += `${this.morning} ${this.name}`;
          break;
        case "afternoon":
          msg += `${this.afternoon} ${this.name}`;
          break;
        case "evening":
          msg += `${this.evening} ${this.name}`;
          break;
      }

      console.log(msg);
    },
  };
}

let helloVictor = createGreeter("Victor");
helloVictor.greet("morning"); //Good Morning Victor

// 2)
let item = {
  name: "Foo",
  description: "Fusce consequat dui est, semper.",
  price: 50,
  quantity: 100,

  discount: function (percent) {
    let discount = this.price * (percent / 100);
    console.log((this.price -= discount));
  },
};

let itemOne = Object.assign({}, item);
itemOne.discount(20); // should return 40

let itemTwo = Object.assign({}, item);
itemTwo.discount(50); // should return 25

let itemThree = Object.assign({}, item);
itemThree.discount(25); // should return 37.5
*/

// 3)
