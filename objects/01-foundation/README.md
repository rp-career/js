# **🔥 TOPIC 1 — JavaScript Object Basics**

We’ll keep the flow tight:

1. **Concept explanation (simple + real)**
2. **Examples that actually make sense**
3. **Your practice tasks**

Let’s roll.

---

# **1.1 What an Object Actually Is**

A **JavaScript object** is:

- a collection of **key–value pairs**
- stored in **heap memory**
- accessed through a **reference** stored in the stack

Basics:

```js
const user = {
  name: "RP",
  role: "Developer",
  active: true,
};
```

Keys are always strings (or symbols).
Values can be _anything_ — numbers, arrays, functions, even other objects.

---

# **1.2 Dot vs Bracket Access**

### Dot → simple, common

```js
user.name;
```

### Bracket → required when:

- key is dynamic
- key has spaces
- key starts with a number
- key is stored in a variable

```js
user["user-age"] = 27;

const prop = "country";
user[prop] = "India";
```

If you always understand **when** bracket is required → half your future bugs disappear.

---

# **1.3 Add, Update, Delete**

### Add:

```js
user.city = "Pune";
```

### Update:

```js
user.name = "RP Singh";
```

### Delete:

```js
delete user.role;
```

---

# **1.4 Reference Behavior (the part most juniors ignore)**

Objects are not copied.
They are **referenced**.

```js
const a = { x: 1 };
const b = a;

b.x = 200;

console.log(a.x); // 200 (both point to same object)
```

Two different objects are **never** equal:

```js
{} === {} // false
```

Why?
→ Different memory locations in the heap.

---

# **1.5 Quick Mental Model**

Think of:

- **Stack** = variable names + references
- **Heap** = actual object data

So:

```js
const user = { name: "RP" };
```

Stack:

```
user → (pointer)
```

Heap:

```
{ name: "RP" }
```

---

# **🔥 Your Practice Time**

Do these now — learning sticks only when you _type_.

## 🟩 EASY

### **1. Create an object `car` with 3 properties. Then add one new property.**

### **2. Delete one property from any object.**

### **3. Access a property using a variable key.**

---

## 🟨 MEDIUM

### **4. Write this function:**

```js
function updateUser(obj, key, value) {
  // ?
}
```

It should update the property dynamically.

### **5. Explain in your own words why:**

```js
{ a:1 } === { a:1 }
```

is false.

---

## 🟥 HARD

### **6. Make two references to the same object, modify one, explain why both update.**

### **7. Write a function that performs a _manual shallow clone_ of an object (no Assign, no spread).**

---
