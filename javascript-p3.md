# JavaScript Syntax - Part 2

## Advanced Objects 

Advanced Objects look something like: 

```js
const robot = {
  model: 'B-4MI',
  mobile: true,
  greeting() {
  	console.log(`I'm model ${this.model}, how may I be of service?`);
  }
}

const massProdRobot = (model, mobile) => {
  return {
    model,
    mobile,
    greeting() {
      console.log(`I'm model ${this.model}, how may I be of service?`);
    }
  }
}

const shinyNewRobot = massProdRobot('TrayHax', true)

const chargingStation = {
  _name: 'Electrons-R-Us',
  _robotCapacity: 120,
  _active: true,
  _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],

  set robotCapacity(newCapacity) {
    if (typeof newCapacity === 'number') {
      this._robotCapacity = newCapacity;
    } else {
      console.log(`Change ${newCapacity} to a number.`)
    }
  },
  get robotCapacity() {
    return this._robotCapacity;
  }
}
```

### `this` keyword

Objects are collections of related data and functionality. We store that functionality in methods on our objects:

```js
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  }
};
```
In our goat object we have a `.makeSound()` method. We can invoke the `.makeSound()` method on `goat`.
```js
goat.makeSound(); // Prints baaa
```

Nice, we have a `goat` object that can print baaa to the console. Everything seems to be working fine. What if we wanted to add a new method to our `goat` object called `.diet()` that prints the `goat`'s `dietType`?

```js
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(dietType);
  }
};
goat.diet(); 
// Output will be "ReferenceError: dietType is not defined"
```
That’s strange, why is `dietType` not defined even though it’s a property of `goat`? That’s because inside the scope of the `.diet()` method, we don’t automatically have access to other properties of the `goat` object.

Here’s where the `this` keyword comes to the rescue. If we change the `.diet()` method to use `this`, the `.diet()` works! :

```js
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};
 
goat.diet(); 
// Output: herbivore
```

The `this` keyword references the calling object which provides access to the calling object’s properties. In the example above, the calling object is goat and by using `this` we’re accessing the goat object itself, and then the `dietType` property of `goat` by using property dot notation.


### Arrow Functions & `this`

The `this` keyword doesn't work the same way when an arrow function is used to define object methods. Refer to below example.

```js
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  }
};
 
goat.diet(); // Prints undefined
```

In the comment, you can see that `goat.diet()` would log undefined. So what happened? Notice that the `.diet()` method is defined using an arrow function.

Arrow functions inherently bind, or tie, an already defined `this` value to the function itself that is NOT the calling object. In the code snippet above, the value of `this` is the global object, or an object that exists in the global scope, which doesn’t have a `dietType` property and therefore returns `undefined`.

To read more about either arrow functions or the global object check out the MDN documentation of the [global object](https://developer.mozilla.org/en-US/docs/Glossary/Global_object) and [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

Note:
- You **can't** use `this` keywords in arrow functions! Because arrow functions inherently have `this` tied to the function itself. Omitting the `this` keyword will still yield an error, if the user intends to refer to an internal variable of the object.
  Instead, resort to the longhand format or ES6 shorthand format.
* ES6 shorthand format
  ```js
  const goat = {
    name: 'Billy',
    color: 'biege',
    giveDetails(){
        console.log(`${this.name} is a ${this.color} goat.`)
    }
  }
  ```
* longhand format
  ```js
  const goat = {
    name: 'Billy',
    color: 'biege',
    giveDetails: function() {
        console.log(`${this.name} is a ${this.color} goat.`)
    }
  }
  ```
