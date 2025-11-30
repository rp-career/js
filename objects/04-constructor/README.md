# **Constructor Functions — Practical Notes**

## **1. What a Constructor Function Is**

A constructor function is just a normal function used with the `new` keyword to create objects.

```js
function User(name, age) {
  this.name = name;
  this.age = age;
}
```

---

# **2. What `new` Does Internally**

`new User("A", 20)` performs these steps:

1. Creates an empty object

   ```js
   {
   }
   ```

2. Sets this object’s prototype

   ```js
   obj.__proto__ = User.prototype;
   ```

3. Calls the function with `this` bound to that object
4. Returns the object automatically

This is the true mechanism behind classes in JS.

---

# **3. Properties Inside the Constructor**

You can define any property inside the constructor:

```js
function User(name, age) {
  this.name = name;
  this.age = age;
}
```

Allowed:

- primitives
- objects
- arrays
- functions

---

# **4. Methods Inside the Constructor (Allowed but Not Recommended)**

```js
function User(name, age) {
  this.sayHi = function () {
    console.log("Hi");
  };
}
```

### Why it’s a bad idea:

- Every instance gets its own copy of the function
- Unnecessary memory usage
- Slower object creation
- Not using prototypes as intended

Use this approach only when you want every object to have a unique method instance (rare).

---

# **5. Adding Methods the Right Way (Best Practice)**

Attach methods to the prototype:

```js
User.prototype.sayHi = function () {
  console.log("Hi, I’m " + this.name);
};
```

Benefits:

- One shared function for all instances
- Lower memory usage
- Cleaner separation of data (constructor) and behavior (prototype)

---

# **6. Shared vs Per-Instance Behavior**

### Put data in the constructor:

```js
this.name = name;
```

### Put methods in the prototype:

```js
User.prototype.info = function () {};
```

### Put default shared values in the prototype:

```js
User.prototype.type = "human";
```

All instances will inherit `type`.

---

# **7. Checking Instance Type**

```js
u1 instanceof User; // true
```

This works because prototype is connected correctly.

---

# **8. Custom Behavior With `new` (Advanced)**

You can simulate `new` manually:

```js
function _new(constructor, ...args) {
  const obj = Object.create(constructor.prototype);
  constructor.apply(obj, args);
  return obj;
}
```

Useful for understanding the internal mechanism.

---

# **9. When To Use Constructor Functions**

Use constructors when:

- You need to create many similar objects
- You want shared methods
- You want `instanceof` support
- You need prototype-based behavior

They are the foundation behind ES6 classes.

---

# **10. What Not To Do**

Avoid:

```js
function User() {
  // ❌ Returning object manually
  // ❌ Defining large methods inline
  // ❌ Mutating prototype inside constructor
}
```

Avoid mixing class-like behavior with object literals inside the constructor.

---
