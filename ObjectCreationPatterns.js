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

// 2)
function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};

Person.prototype.communicate = function() {
  console.log('Communicating');
};

Person.prototype.eat = function() {
  console.log('Eating');
};

Person.prototype.sleep = function() {
  console.log('Sleeping');
};

function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
};
Doctor.prototype.constructor = Doctor;

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.teach = function() {
  console.log('Teaching');
};
Professor.prototype.constructor = Professor;

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function() {
  console.log('Studying');
};
Student.prototype.constructor = Student;

function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.research = function() {
  console.log('Researching');
};
GraduateStudent.prototype.constructor = GraduateStudent;

let person = new Person("foo", "bar", 21, "gender");
console.log(person instanceof Person); // logs true
person.eat(); // logs 'Eating'
person.communicate(); // logs 'Communicating'
person.sleep(); // logs 'Sleeping'
console.log(person.fullName()); // logs 'foo bar'

let doctor = new Doctor("foo", "bar", 21, "gender", "Pediatrics");
console.log(doctor instanceof Person); // logs true
console.log(doctor instanceof Doctor); // logs true
doctor.eat(); // logs 'Eating'
doctor.communicate(); // logs 'Communicating'
doctor.sleep(); // logs 'Sleeping'
console.log(doctor.fullName()); // logs 'foo bar'
doctor.diagnose(); // logs 'Diagnosing'

let graduateStudent = new GraduateStudent(
  "foo",
  "bar",
  21,
  "gender",
  "BS Industrial Engineering",
  "MS Industrial Engineering"
);
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat(); // logs 'Eating'
graduateStudent.communicate(); // logs 'Communicating'
graduateStudent.sleep(); // logs 'Sleeping'
console.log(graduateStudent.fullName()); // logs 'foo bar'
graduateStudent.study(); // logs 'Studying'
graduateStudent.research(); // logs 'Researching'
*/

// 3)
class CircularQueue {
  constructor(size) {
    this.buffer = new Array(size).fill(null);
    this.nextPosition = 0;
    this.oldestPosition = 0;
  }

  enqueue(object) {
    if (this.buffer[this.nextPosition] !== null) {
      this.oldestPosition = this.increment(this.nextPosition);
    }
    this.buffer[this.nextPosition] = object;
    this.nextPosition = this.increment(this.nextPosition);
  }

  dequeue() {
    let value = this.buffer[this.oldestPosition];
    this.buffer[this.oldestPosition] = null;
    if (value !== null) {
      this.oldestPosition = this.increment(this.oldestPosition);
    }
    return value;
  }

  increment(position) {
    return (position + 1) % this.buffer.length;
  }
}

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
//[1, 2]
console.log(queue.dequeue() === 1);
//[2]
queue.enqueue(3);
queue.enqueue(4);
//[2, 3, 4]
console.log(queue.dequeue() === 2);
//[3, 4]
queue.enqueue(5);
//[3, 4, 5]
queue.enqueue(6);
//[6, 4, 5]
queue.enqueue(7);
//[6, 7, 5]
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1);
anotherQueue.enqueue(2);
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3);
anotherQueue.enqueue(4);
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5);
anotherQueue.enqueue(6);
anotherQueue.enqueue(7);
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);
