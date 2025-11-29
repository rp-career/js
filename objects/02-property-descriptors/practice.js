/*
EASY
Create an object and add a non-writable property version = 1.
*/

const easyObj = { name: "RP" };
Object.defineProperty(easyObj, "version", {
  value: 1,
  writable: false,
});

easyObj.name = "Raja";
easyObj.version = 2;

console.log("Modified Obj : ", easyObj);

/*
MEDIUM
Add a non-enumerable property token = "abc123" and confirm that Object.keys(obj) doesn’t show it.
*/

const mediumObj = { name: "RP" };
Object.defineProperty(mediumObj, "token", {
  value: "abc123",
  enumerable: false,
});

console.log("Object Keys : ", Object.keys(mediumObj));

/*
HARD

Create a function definePrivate(obj, key, value)
It must:
be non-writable
non-enumerable
non-configurable

Example call:
definePrivate(user, "pin", 4321);
*/

const user = { name: "John Cena" };

function definePrivate(obj, key, value) {
  Object.defineProperty(obj, key, {
    value,
    configurable: false,
    enumerable: false,
    writable: false,
  });
}

definePrivate(user, "age", 50);
console.log(Object.getOwnPropertyDescriptor(user, "age"));
console.log("User with private property : ", user);
console.log("User keys : ", Object.keys(user));
user.age = 40;
console.log("User after write : ", user);
delete user.age;
console.log("User after delete : ", user);
