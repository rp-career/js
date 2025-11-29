# **Topic 2 — Property Descriptors**

Objects don’t just store values.
Each property has _metadata_ that controls how it behaves.

These three flags matter:

1. **writable** → can the value be changed?
2. **enumerable** → does it show up in loops?
3. **configurable** → can it be deleted or reconfigured?

You normally don’t see these flags because object literals use defaults:

```js
const obj = { a: 1 };
```

Default descriptors:

```
writable: true
enumerable: true
configurable: true
```

To control them, you use:

```js
Object.defineProperty(obj, 'key', { ... });
```

---

# **2.1 Define a non-writable property**

```js
const user = {};
Object.defineProperty(user, "id", {
  value: 100,
  writable: false,
});

user.id = 200; // ignored
```

---

# **2.2 Define a non-enumerable property**

Non-enumerable means it won’t appear in:

- for...in
- Object.keys()
- Object.entries()

```js
Object.defineProperty(user, "secret", {
  value: "hidden",
  enumerable: false,
});
```

---

# **2.3 Check descriptors**

```js
Object.getOwnPropertyDescriptor(user, "secret");
```

---

# **2.4 Non-configurable (cannot delete)**

```js
Object.defineProperty(user, "code", {
  value: "XYZ",
  configurable: false,
});

delete user.code; // fails
```

---

# **Practice**

### **EASY**

1. Create an object and add a non-writable property `version = 1`.

### **MEDIUM**

2. Add a non-enumerable property `token = "abc123"` and confirm that `Object.keys(obj)` doesn’t show it.

### **HARD**

3. Create a function `definePrivate(obj, key, value)`
   It must:

   - be non-writable
   - non-enumerable
   - non-configurable

Example call:

```js
definePrivate(user, "pin", 4321);
```

---
