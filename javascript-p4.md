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

### Class Instances 

We can create instances of a particular class by calling the constructor method & setting the object returned by the constructor to a variable. 

Following the previous usage of the `Dog` class.

```js
const halley = new Dog('Halley'); // this creates a new Dog instance
```

### Methods 

We can add methods (getters, setters, normal methods) to the class.

```js
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
}
```

### Inheritance 

Objects in JavaScript can also exhibit inheritance.

Child classes can extend parent classes in a manner similar to Java. The child classes will then inherit properties & methods from the parent class.

```js
class Child extends Parent {
    // properties & methods inherited from Parent class
    
    // other properties & methods unique to Child class
}
```

A simple example below highlights this.

```js
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
} 
```

```js
class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._behavior = 0;
    this._usesLitter = usesLitter;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }

  get usesLitter() {
    return this._usesLitter;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
} 
```

We observe that the `Cat` class has similarities with the `Animal` class & in fact has additional properties & methods unique to the `Cat` class.

We can then rewrite the `Cat` class as follows:

```js
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}
```

### Static Methods 

There are instances when we want to have properties and/or methods that aren't available in individual instances but that you can call directly from the class. 

```js
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
} 
```

