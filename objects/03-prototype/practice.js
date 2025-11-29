/*
EASY
Create an object animal with a property type: "mammal".
Then create another object dog using Object.create(animal) and add a name property.
*/

const animal = { type: "mammal" };
const dog = Object.create(animal);
dog.name = "Dogesh";

console.log("Dog : ", dog, ". ", "Type of dog", dog.type);

/*
MEDIUM

Create an object vehicle with a method move().
Then create car inheriting from vehicle and call car.move().
*/

//out of scope. Not yet learned methods.

/*
Explain what this outputs and why:
console.log([].__proto__.__proto__);
 */
console.log([].__proto__.__proto__);

// Output is setter,getter like basic properties and methods .
// Array is object in js. first __proto__ is return the methods related to arrat like map,at, etc. seconf proto will point towards base object proto.
