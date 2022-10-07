# JavaScript Syntax - Part 4

## Classes

Classes in JavaScript look something like: 

```js
let halley = {
  _name: 'Halley',
  _behavior: 0,
 
  get name() {
    return this._name;
  },
 
  get behavior() {
    return this._behavior;
  },
 
  incrementBehavior() {
    this._behavior++;
  }
}
```

### Constructor 

The constructor method is what JavaScript uses to create new objects of a particular class. Note that the constructor method is also what differentiates a class & object in terms of syntax. In an object, you will not see a constructor method while it is present in a class.

The constructor in a class resembles as follows:

```js
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}
```


