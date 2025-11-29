# **EASY — Correct**

You created `animal`, used `Object.create()`, and verified prototype inheritance.
No corrections needed.

---

# **MEDIUM — You said “out of scope”**

This one **is** in scope for Topic 3.

A “method” is just a function stored as a property.
We already covered adding properties in Topic 1.
So adding a function property is not a new concept.

You don’t need classes or anything advanced yet.

Here’s the minimal, in-scope version:

### **How to define a method right now**

```js
const vehicle = {
  move() {
    console.log("moving...");
  },
};

const car = Object.create(vehicle);
car.move();
```

This uses:

- an object literal
- a normal function
- prototype inheritance

All topics you already know.

---

# **HARD — Your answer**

You got the right idea. Here’s the compressed version:

### `[].__proto__`

→ the Array prototype
Contains: `map`, `filter`, `push`, etc.

### `[].__proto__.__proto__`

→ the Object prototype
Contains things like:

- `toString`
- `valueOf`
- `hasOwnProperty`

### Why?

Because arrays inherit from:

```
Array.prototype → Object.prototype → null
```

Your explanation is correct.

---

# **Your corrected HARD explanation (clean version)**

```
[].__proto__             → Array.prototype
[].__proto__.__proto__   → Object.prototype
```

Arrays inherit from objects, so after going one level up the array prototype, you reach the base object prototype.

---
