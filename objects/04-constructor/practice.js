/*
EASY
1. Create a constructor function Person(name, age)
Store name and age on this
Create 2 instances using new

Example:
const p1 = new Person("A", 20);
const p2 = new Person("B", 25);
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("A", 20);
const p2 = new Person("B", 25);

/*
MEDIUM
2. Add a method using Person.prototype.info
It should return:
Name: <name>, Age: <age>

Example:
p1.info(); // "Name: A, Age: 20"
*/

Person.prototype.info = function () {
  return `Name: ${this.name}, Age: ${this.age}`;
};

console.log(p1.info());

/*
HARD
3. Implement your own _new
Now write your own version:

const p3 = _new(Person, "C", 40);
p3.info(); // should work
*/

function _new(cons, ...args) {
  const obj = {};
  obj.__proto__ = cons.prototype;
  cons.apply(obj, args);
  return obj;
}

const p3 = _new(Person, "C", 40);
console.log(p3, p3.info());
