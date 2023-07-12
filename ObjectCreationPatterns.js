// 1)
/*
// name property added to make objects easier to identify
let foo = {
  name: "foo",
  ancestors() {
    let result = [];
    let obj = this;
    while (true) {
      let prototype = Object.getPrototypeOf(obj);
      if (prototype !== null) {
        result.push(prototype);
        obj = prototype;
      } else {
        break;
      }
    }
    console.log(result);
  },
};
let bar = Object.create(foo);
bar.name = "bar";
let baz = Object.create(bar);
baz.name = "baz";
let qux = Object.create(baz);
qux.name = "qux";

qux.ancestors(); // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors(); // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors(); // returns ['foo', 'Object.prototype']
foo.ancestors(); // returns ['Object.prototype']
*/

// 2)
