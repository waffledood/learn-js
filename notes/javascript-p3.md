# JavaScript Syntax - Part 3

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

### Privacy in Objects

Although certain languages have privacy built-in for objects, JavaScript does not have this feature. Rather, JavaScript developers follow naming conventions that signal to other developers how to interact with a property. One common convention is to place an underscore `_` before the name of a property to mean that the property should not be altered. Here’s an example of using `_` to prepend a property.

```js
const bankAccount = {
  _amount: 1000
}
```

In the example above, the _amount is not intended to be directly manipulated, even so, it is still possible to reassign `_amount`:

`bankAccount._amount = 1000000;`

### Getter methods

In JavaScript, getter methods are defined in the following manner:

```js
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}
 
// To call the getter method: 
person.fullName; // 'John Doe'
```

A few things to note about getter methods in JavaScript:
- Getter methods are prepended with the `get` keyword
- Getter methods can access the calling object’s internal properties using `this`
- In the last line we call `fullName` on person. In general, getter methods do not need to be called with a set of parentheses. Syntactically, it looks like we’re accessing a property.
- Avoid naming getter & setter methods the same as object's variables, as calling the getter/setter method will instead call the getter/setter method instead of the object's variable & result in an infinite recursive call.

Some advantages of using getter methods:
- Getters can perform an action on the data when getting a property.
- In a getter, we can access the properties of the calling object using `this`.
- The functionality of our code is easier for other developers to understand.


### Setter Methods

In JavaScript, setter methods are defined in the following manner:

```js
const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};
```

A few things to note about setter methods in JavaScript:
- Setter methods are prepended with the `set` keyword
- Setter methods can access the calling object's internal properties using `this`
- Also similar to getter methods, setter methods do not need to be called with a set of parentheses. 
- Avoid naming getter & setter methods the same as object's variables, as calling the getter/setter method will instead call the getter/setter method instead of the object's variable & result in an infinite recursive call.

### Factory Functions

Factory functions are essentially constructors, that allow you to create an object of a specific type. A factory function is written in the following manner in JavaScript: 

```js
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};
```

The `monsterFactory` function above returns an object with 4 properties: `name`, `age`, `energySource`, and `scare()`.

### Property Value Shorthand

ES6 introduced some new shortcuts for assigning properties to variables known as _destructuring_.

In the previous sub-section, we manually assigned the parameters of the function to the properties of the object we were returning. Instead, we can use _destructuring_ to save us some typing! 

```js
const monsterFactory = (name, age) => {
  return { 
    name,
    age 
  }
};
```

### Destructured Assignment

In cases where we'd want to extract key-value pairs from objects and save them as variables, we might do the following: 

```js
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 
```

However, we can also take advantage of a destructuring technique called _destructured assignment_ to save ourselves some keystrokes. In destructured assignment we create a variable with the name of an object’s key that is wrapped in curly braces { } and assign to it the object, as follows: 

```js
const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'
```

### Built-in Object Methods

Although we can define methods for custom objects, objects inherit several in-built methods from the parent `Object`. These methods can be found at the [official MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).


## Higher-Order Functions 

### Functions as Data 

JavaScript functions behave like any other data type in the language; we can assign functions to variables, and we can reassign them to new variables.

For instance, we have the following function & we assign it to a variable: 

```js
const aReallyLongFunctionName = function(num) {
  let val = 2 + num;
  console.log(`The value is ${val}`);
}

const func =  aReallyLongFunctionName;
```

In the example above, we might have wanted to assign the function to a variable with a suitably shorter name, for ease of use (function calls). With the new variable, we can make function calls similar to how we did before!

```js
aReallyLongFunctionName(2); // returns 4
func(2);                    // also returns 4!
```

Note:
- We assign the **_function_** to a variable, **NOT** the **value returned** by the function!

Since functions are a type of object, they also have properties such as `.name`, `.length` & methods such as `toString()`. Such methods might be particularly useful should we want to check or assert the properties of variables that have been assigned other functions.

```js
aReallyLongFunctionName.name; // returns 'aReallyLongFunctionName'
func.name;                    // returns 'aReallyLongFunctionName'
```

Further documentation on the methods & properties of functions can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function).


### Functions as Parameters 

A higher-order function is a function that either accepts functions as parameters, returns a function or both! We call functions that get passed in as arguments _callback functions_. _Callback functions_ get invoked during the execution of the higher-order function. 

When we invoke a higher-order function, and pass another function in as an argument, we don’t invoke the argument function. Invoking it would evaluate to passing in the return value of that function call. With callback functions, we pass in the function itself by typing the function name without the parentheses:

```js
const higherOrderFunc = param => {
  param();
  return `I just invoked ${param.name} as a callback function!`
}
 
const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}
 
higherOrderFunc(anotherFunc);
```

Notice how we pass in `anotherFunc` simply as `anotherFunc`, instead of `anotherFunc()`. Because writing `anotherFunc()` invokes the `anotherFunc` function & passes in the output of `anotherFunc` as an argument into `higherOrderFunc`. 

Below are further examples to highlight how higher-order functions can be used.

```js
const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);

  if (checkA === checkB) {
    return checkB;
  } else {
    return 'inconsistent results';
  }
}

console.log(checkConsistentOutput(addTwo, 2));
```

## Iterators 

Iterators, or iteration methods are in-built JavaScript array methods that help us iterate over arrays. Further documentation on iteration methods can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods).

### The `.forEach()` method

The `forEach()` method executes the provided function for each array element.

Some notes about the `.forEach()` method: 
- `.forEach()` takes an argument of a callback function. Remember, a callback function is a function passed as an argument into another function.
- `.forEach()` loops through the array and executes the callback function for each element. During each execution, the current element is passed as an argument to the callback function.
- The return value for `.forEach()` will always be `undefined`.

There are several ways to pass in a callback function to `.forEach()`, either writing a function declaration, function expression or arrow function as an anonymous function inside `.forEach()` (as in Example 1 below), or declaring the function as a variable beforehand (Example 2).

1. ```js
   function printGrocery(element){
     console.log(element);
   }
 
   groceries.forEach(printGrocery);
   ```
2. ```js
   groceries.forEach(
     groceryItem => console.log(groceryItem)
   );
   ```

### The `.map()` method

Similar to `.forEach()` method, the `.map()` method executes the callback function on each array element but returns a new array!

An example below:

```js
const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map(
  function(number) {
    return number / 100;
  }
);

console.log(smallNumbers);  // prints [1, 2, 3, 4, 5]
```

### The `.filter()` method

The `.filter()` method is used to return a new array where its elements have been filtered from the original array. Usually a conditional statement(s) is used inside the callback function.

An example below: 
```js
const fruits = ['mango', 'kiwi', 'peach', 'apple']
const fruitsWithLongNames = fruits.filter(
  fruit => {
    return fruit.length >= 5;
  }
);

console.log(fruitsWithLongNames)  // prints ['mango', 'peach', 'apple']
```

### The `.findIndex()` method 

The `.findIndex()` method returns the index of the first element that evaluates to `true` in the callback function. In the event none of the array elements fulfill the condition(s) in the callback function, a value of `-1` is returned. 

An example below:

```js
const items = ['car', 'cat', 'oven'];
const itemThatStartWithC = items.findIndex(
  item => {
    return item.charAt(0) === 'c';
  }
)
```

### The `.reduce()` method

The `.reduce()` method is used to reduce an array to a single value.

An example below: 

```js
const numbers = [1, 2, 3, 4, 5];

const sumOfNumbers = numbers.reduce(
  (accumulator, currentValue) => {
    return accumulator + currentValue;
  }
);

console.log(sumOfNumbers);  // Output: 17
```

### Interesting use-cases of ES6 with Arrays

The following are some interesting examples of ES6 in Arrays, where brevity of code (because of ES6's shortcuts) makes for easier-to-read & cleaner code (which I really like!).

#### Using destructuring in Array methods

In the following example, we want to sort `Species` objects in increasing order of their teeth number. ES6 allows us to destructure the object & access its variables in a single line, without having to write extra lines of code. 

```js
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

function sortSpeciesByTeeth(array) {
  return array.sort(
    ({numTeeth: a}, {numTeeth: b}) => {
      return a - b;
    }
  );
}
```

This solution was inspired by these StackOverflow posts: [post 1](https://stackoverflow.com/questions/46121420/es6-destructuring-two-objects-with-same-property-name) & [post 2](https://stackoverflow.com/questions/56266438/destructuring-same-name-properties-of-object-arguments-allow-many-instead-of-a).

