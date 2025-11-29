/* 
EASY
1. Create an object car with 3 properties. Then add one new property.
2. Delete one property from any object.
3. Access a property using a variable key.
*/

const car = { model: "FIAT", year: 2003, price: "2M" };
car.owner = "Cena";
delete car.price;
console.log(
  "Car Model : ",
  car.model,
  ". ",
  "Car object after modification :",
  car
);

/*
MEDIUM
4. Write this function:
function updateUser(obj, key, value) {
  // ?
}
It should update the property dynamically.
*/

const user = { name: "RP", age: 28, work: "MERN" };

function updateUser(obj, key, value) {
  obj[key] = value;
}

updateUser(user, "age", 18);

console.log("Updated user : ", user);

/*
5. Explain in your own words why:
{ a:1 } === { a:1 }
is false.
*/

// Object are pointing towards refernce in the heap memory.They are not same even though both are having same key and value.

/* HARD
6. Make two references to the same object, modify one, explain why both update.
7. Write a function that performs a manual shallow clone of an object (no Assign, no spread)
*/

const obj1 = { id: 3 };
const obj2 = obj1;
obj1.id = 4;
console.log("Object 1 : ", obj1, " . ", "Object 2 : ", obj2);
// Both object are pointing towards same memory reference.

const originalObject = { name: "RP" };
function cloneObj(obj) {
  const clone = {};

  for (const key in obj) {
    clone[key] = obj[key];
  }

  return clone;
}
