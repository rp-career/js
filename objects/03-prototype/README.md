# **Topic 3 — Prototypes**

---

# **3.1 What a Prototype Actually Is**

Every JavaScript object has an internal link called `[[Prototype]]`.
This link points to another object.
If a property is not found on the object itself, JS looks **up the prototype**.

This is called **prototype chain lookup**.

Example:

```js
const obj = {};
obj.toString(); // comes from prototype, not obj
```

`toString` is not in `obj`.
JS finds it in `obj`’s prototype.

---

# **3.2 Creating an Object With a Prototype**

```js
const base = { type: "human" };
const person = Object.create(base);

person.name = "A";
```

Now:

- `person.name` → exists on `person`
- `person.type` → found in `base` (its prototype)

---

# **3.3 Checking the Prototype**

```js
Object.getPrototypeOf(person);
```

Setting the prototype:

```js
Object.setPrototypeOf(person, newProto);
```

(Not used often because it’s slow, but good to know.)

---

# **3.4 Prototype Chain Example**

```js
const a = {};
const b = Object.getPrototypeOf(a);
const c = Object.getPrototypeOf(b); // null
```

Chain ends at `null`.

---

# **3.5 Create an Object With No Prototype**

```js
const empty = Object.create(null);
```

This object has:

- no `toString`
- no `hasOwnProperty`
- no built-in methods

Useful for dictionaries/maps.

---

# **Practice**

## **EASY**

1. Create an object `animal` with a property `type: "mammal"`.
   Then create another object `dog` using `Object.create(animal)` and add a `name` property.

Verify:

- dog.name is direct
- dog.type is inherited

---

## **MEDIUM**

2. Create an object `vehicle` with a method `move()`.
   Then create `car` inheriting from `vehicle` and call `car.move()`.

---

## **HARD**

3. Explain what this outputs and why:

```js
console.log([].__proto__.__proto__);
```

---
