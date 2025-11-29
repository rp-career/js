# **EASY**

- Non-writable property → correct
- Updating another property (`name`) → correct
- Attempting to update `version` → correctly ignored

---

# **MEDIUM**

- Added non-enumerable property → correct
- `Object.keys()` only shows enumerable keys → correct
- Output behavior is correct

---

# **HARD**

- `definePrivate()` implementation → correct
- All three flags set properly
- Testing write and delete behavior → correct
- `Object.keys()` excluding the private key → correct
