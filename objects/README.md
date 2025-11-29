# **JavaScript Objects — Explanation + Practice-Driven Master Plan (Markdown Version)**

---

## **1. Object Basics — Foundation Layer**

### **What you’ll learn**

- Object literals
- Dot vs bracket
- Add/update/delete
- Reference behavior

### **Explanation**

Objects store key–value pairs.
Variables hold **references**, not actual objects.

```js
const user = { name: "RP" };
user.role = "Developer";
delete user.name;
```

Objects are _never_ equal by value:

```js
{} === {} // false
```

Bracket notation is needed for:

- dynamic keys
- keys with spaces
- keys starting with numbers

### **Practice**

**Easy**

- Create an object and add/remove properties.
- Access a property using a variable key.

**Medium**

- Write `updateUser(obj, key, value)` to update dynamic keys.
- Explain why `{}` !== `{}`.

**Hard**

- Show how modifying one reference affects the other.
- Manually clone an object (no `Object.assign`).

---

## **2. Property Descriptors — Internal Rules**

### **Explanation**

Every property has attributes:

- `writable`
- `enumerable`
- `configurable`

```js
Object.defineProperty(obj, "id", {
  value: 42,
  writable: false,
  enumerable: false,
});
```

View metadata:

```js
Object.getOwnPropertyDescriptors(obj);
```

### **Practice**

**Easy**

- Create a non-writable property.

**Medium**

- Create a non-enumerable property.

**Hard**

- Implement `definePrivate(obj, key, value)` that is:

  - non-writable
  - non-enumerable
  - non-configurable

---

## **3. Prototypes — The Backbone**

### **Explanation**

All objects have a `[[Prototype]]` fallback chain.

```js
const obj = {};
obj.toString(); // inherited
```

Custom prototype:

```js
const base = { species: "human" };
const person = Object.create(base);
person.name = "RP";
```

### **Practice**

**Easy**

- Create `Object.create(null)` (no prototype).

**Medium**

- Create `animal → dog` relationship.

**Hard**

- Explain: `[].__proto__.__proto__`.

---

## **4. Constructor Functions — Pre-Class OOP**

### **Explanation**

Functions used to create objects:

```js
function User(name) {
  this.name = name;
}
User.prototype.sayHi = function () {
  return "Hi " + this.name;
};
```

What `new` does:

1. creates empty obj
2. sets prototype
3. binds `this`
4. returns object

### **Practice**

**Easy**

- Build `Person(name, age)` constructor.

**Medium**

- Add methods via prototype.

**Hard**

- Implement your own `_new(func, ...args)`.

---

## **5. ES6 Classes — Modern Syntax**

### **Explanation**

Classes wrap constructor + prototype.

```js
class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello ${this.name}`;
  }
  static compare(a, b) {
    return a.name.localeCompare(b.name);
  }
}
```

Includes:

- static methods
- inheritance (`extends`)
- overriding
- getters/setters

### **Practice**

**Easy**

- Create a `Book` class.

**Medium**

- Add getter and setter for `_price`.

**Hard**

- Build `Animal → Dog` with override & `super()`.

---

## **6. Object Utilities**

### **Explanation**

```js
Object.keys();
Object.values();
Object.entries();
Object.assign();
const clone = { ...obj };
```

Spread/rest:

```js
const { a, ...rest } = obj;
```

### **Practice**

**Easy**

- Convert object → array using `entries`.

**Medium**

- Merge two objects using spread.

**Hard**

- Deep clone an object without JSON tricks.

---

## **7. Immutability Tools**

### **Explanation**

- `Object.freeze()` → cannot add/delete/modify
- `Object.seal()` → cannot add/delete

### **Practice**

**Easy**

- Freeze an object and test mutations.

**Medium**

- Write `shallowFreeze(obj)`.

**Hard**

- Implement recursive `deepFreeze`.

---

## **8. Symbols, Maps, WeakMaps**

### **Explanation**

Symbols → unique property keys
Maps → better key/value store
WeakMaps → keys auto-GC (must be objects)

```js
const id = Symbol();
obj[id] = 123;

const map = new Map();
map.set("a", 10);

const wm = new WeakMap();
wm.set(obj, "private");
```

### **Practice**

**Easy**

- Add a symbol key to an object.

**Medium**

- Use Map to count item occurrences.

**Hard**

- Use WeakMap to store private metadata for objects.

---

## **9. Modern Object Patterns**

### **Explanation**

Must-know modern patterns:

- destructuring
- optional chaining `?.`
- nullish coalescing `??`
- factory functions
- fluent APIs
- composition

### **Practice**

**Easy**

- Safely destructure nested properties.

**Medium**

- Build a fluent calculator:

```js
calc.add(5).sub(2).mul(3);
```

**Hard**

- Build a factory function that shares behavior using closures (not prototypes).

---
