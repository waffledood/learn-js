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

### Classes 

In the case when a child class extends its parent class, there is a standard in which the `super()` constuctor is called inside the child's constructor.

> ❗️ Error!
> 
> The following code block is wrong!
> We cannot initialize the child's variables first, and then call the parent's constructor!

```js
class Child extendsParent {
    constructor(a, b, c) {
        this._c = c;
        super(a, b);
    }

    // .. other methods
}
```

> ✅ Correct!
> 
> The following code block is correct!
> We first need to call the parent's constructor method, before initializing the child's variables.

```js
class Child extendsParent {
    constructor(a, b, c) {
        super(a, b);
        this._c = c;
    }

    // .. other methods
}
```


## Implementing Modules using ES6 Syntax

Article on implementing modules in a browser’s runtime environment using ES6 modules syntax. The link to the full article can be found [here](https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-22-javascript-syntax-part-iii/modules/wdcp-22-learn-javascript-syntax-modules/articles/implementing-modules-using-es-6-syntax).

### What are Modules?

Modules are reusable pieces of code in a file that can be exported and then imported for use in another file. A modular program is one whose components can be separated, used individually, and recombined to create a complex system.

Consider the diagram below of an imaginary program written in a file `my_app.js`:

![module-diagram](./docs/module/modular-program-diagram.svg)

> Note: The words “module” and “file” are often used interchangably

Instead of having the entire program written within `my_app.js`, its components are broken up into separate modules that each handle a particular task. For example, the `database_logic.js` module may contain code for storing and retrieving data from a database. Meanwhile, the `date_formatting.js` module may contain functions designed to easily convert date values from one format to another (a common headache among programmers!).

This modular strategy is sometimes called _separation of concerns_ and is useful for a number of reasons. What do you think those reasons might be?

Write down a few of your ideas before revealing the reasons below:

Implementing modules in your program requires a small bit of management. In the remainder of this article, we will be covering:

- How to use the ES6 export statement to export code from a file - meaning its functions and/or data can be used by other files/modules.
- How to use the ES6 import statement to import functions and/or data from another module.

### Implementations of Modules in JavaScript: Node.js vs ES6

Before we dive in, it should be noted that there are multiple ways of implementing modules depending on the runtime environment in which your code is executed. In JavaScript, there are two runtime environments and each has a preferred module implementation:

1. The Node runtime environment and the module.exports and require() syntax.
2. The browser’s runtime environment and the ES6 import/export syntax.

This article will focus on using the ES6 import/export syntax in a browser’s runtime environment. For more information, you can read the articles linked below.

- [Implementing Modules In Node](https://www.codecademy.com/courses/learn-intermediate-javascript/articles/implementing-modules-in-node)
- [Introduction to Runtime Environments](https://www.codecademy.com/articles/introduction-to-javascript-runtime-environments)

### A Brief History of JavaScript Modules in the Browser

In the early days of web development, JavaScript usage was fairly minimal. A script here to add some interactivity to a page and a script there to automate away some simple task. Nowadays, however, JavaScript dominates the web and scripts have ballooned into large and cumbersome behemoths. According to some studies, the average size of a website, in terms of kilobytes of JavaScript data transferred, [has grown over 5 times from 2010 to 2020](https://httparchive.org/reports/state-of-javascript?start=earliest&end=latest&view=list)!

These stats aren’t meant to paint a dreary future of web development. Web applications drive much of modern society and are far more capable than could have been imagined when the World Wide Web was created in 1989. Instead, it is to make clear the need for modularity as the capabilities, and size, of these scripts grow.

Though libraries for implementing modules have existed for some time, syntax for natively implementing modules was only introduced in 2015 with the release of [ECMAScript 6 (ES6)](http://es6-features.org/#ValueExportImport). Since then, it has been adopted by most modern browsers and is the de facto approach for implementing modular applications in the browser.

### Implementing Modules in the Browser

Let’s take a look at implementing modules in the browser through an example. Suppose you wanted to build a simple web application with some hidden text that is revealed when a button is pressed.

A demo of a simple website. There is a button that says "Press me... if you dare". Clicking on the button reveals a hidden message that says "Modules are fancy!"

To create this website, you could create two files, secret-messages.html and secret-messages.js, and store them together in a folder called secret-messages:

```
secret-messages/
|-- secret-messages.html
|-- secret-messages.js
```

Let's take a look at the HTML file first:
```js
<!-- secret-messages.html --> 
<html>
  <head>
    <title>Secret Messages</title>
  </head>
  <body>
    <button id="secret-button"> Press me... if you dare </button>
    <p id="secret-p" style="display: none"> Modules are fancy! </p>
    <script src="./secret-messages.js"> </script>
  </body>
</html>
```

- The secret-messages.html page renders a button element and a hidden paragraph element.
- It then loads the script secret-messages.js using the [file path](https://www.geeksforgeeks.org/html-file-paths/) "`./secret-messages.js`". The `./` before the file name is how you indicate that the file being referenced (`secret-messages.js`) is in the same folder as the file referencing it (`secret-messages.html`).

Speaking of which, let’s take a look at the JavaScript file:

```js
/* secret-messages.js */
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
});
```

- In `secret-messages.js`, DOM objects are created to reference the button element and paragraph element using the [DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById). These objects are stored in `buttonElement` and `pElement`, respectively.
- The function `toggleHiddenElement()` is declared. It can accept either of these elements as an input called `domElement` and will either show or hide that element depending on its current `style.display` value.
- An event listener is added to `buttonElement` to listen for '`click`' events and respond by calling `toggleHiddenElement()` with `pElement` as the argument.

Now, suppose you wanted to create a second webpage with similar features. There is still a button, but this time clicking it reveals an image. Using similar logic as the program above, this can be achieved with the following file structure:

```
secret-image/
|-- secret-image.html
|-- secret-image.js
```

The HTML might look like this:

```js
<!-- secret-image.html --> 
<html>
  <head>
    <title>Secret Image</title>
  </head>
  <body>
    <button id="secret-button"> Want to see something cool? </button>
    <img id="secret-img" src="imageURL.jpg" style="display: none">
    <script src="./secret-image.js"> </script>
  </body>
</html>
```

… and the JavaScript might look like this:

```js
/* secret-image.js */
const buttonElement = document.getElementById('secret-button');
const imgElement = document.getElementById('secret-img');
 
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(imgElement);
});
```
 
Given that much of the code in these two programs is similar, creating this second website was fairly straightforward. In particular, notice that the `toggleHiddenElement()` function is copied line for line from `secret-messages.js`.

Having two identical, but separate, copies of a function can lead to maintenance issues in the future. For example, any bugs that may exist within the function would need to be fixed in two places rather than one.

Instead, creating a single copy of `toggleHiddenElement()` within a module that exports it would allow these two websites to _import_ and use the exact same function. With this approach, updates to the function only need to occur within the module that defines them, and all programs that import this function will receive the same update. Furthermore, additional functions could be exported by the module and used by both programs, further reducing repetition.

### ES6 Named Export Syntax

A module must be entirely contained within a file. So, let’s first consider where a new module may be placed within the file system. Since it needs to be used by both of these projects, you may want to put it in a mutually accessible location. The entire file structure containing both projects and this new module, let’s call it dom-functions.js, could look like this:

```
secret-image/
|-- secret-image.html
|-- secret-image.js
secret-messages/
|-- secret-messages.html
|-- secret-messages.js
modules/
|-- dom-functions.js    <-- new module file
```

Inside `dom-functions.js`, the functions you wish to reuse can be exported using the named export syntax below:

`export { resourceToExportA, resourceToExportB, ...}`

Using this syntax, the name of each exported resource is listed between curly braces and separated by commas. Below, you can see how this is implemented in the new module file `dom-functions.js`:

```js
/* dom-functions.js */
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
 
const changeToFunkyColor = (domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
 
  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}
 
export { toggleHiddenElement, changeToFunkyColor };
```

Let’s briefly break down how this module works:
- The function `toggleHiddenElement()` is declared. It accepts a `domElement` as an input and either shows or hides that element depending on its current display style value.
- A new function `changeToFunkyColor()` is declared. It accepts a `domElement` as an input and then sets its background color to a random [`rgb()` color value](https://www.w3schools.com/colors/colors_rgb.asp).
- The two functions are exported using the ES6 `export` statement.

These exported functions are now available to be imported and used by other files!

> If you want to try this out on your own computer, you will need to spin up a local server or else you will run into [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) issues. [Check out this article](https://www.codecademy.com/articles/spinning-up-a-local-server) on creating a local server with VSCode and the Live Server extension.

In addition to the syntax above, in which all named exports are listed together, individual values may be exported as named exports by simply placing the `export` keyword in front of the variable’s declaration. Here is the same example using this syntax:

```js
/* dom-functions.js */
export const toggleHiddenElement = (domElement) => {
  // logic omitted...
}
 
export const changeToFunkyColor = (domElement) => {
  // logic omitted...
}
```

### ES6 Import Syntax

The ES6 syntax for importing named resources from modules is similar to the `export` syntax:

```js
import { exportedResourceA, exportedResourceB } from '/path/to/module.js';
```

Let’s update the secret-messages program such that it now imports functionality from dom-functions.js. Doing so requires two important steps. First, update secret-messages.js:

```js
/* secret-messages.js */
import { toggleHiddenElement, changeToFunkyColor } from '../modules/dom-functions.js';
 
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});
```

Let’s break down these changes:
- In secret-messages.js, the functions toggleHiddenElement() and changeToFunkyColor() are imported from the module ../modules/dom-functions.js. The ../ indicates that the modules/ folder is in the same folder as the parent folder, secret-messages/.
- When the button is clicked, the now imported toggleHiddenElement() function is called with pElement as an argument.
- In addition, changeToFunkyColor() is called with buttonElement as an argument, changing its background color to a random one!

Now, you must also update secret-messages.html:

```js
<!-- secret-messages.html --> 
<html>
  <head>
    <title>Secret Messages</title>
  </head>
  <body>
    <button id="secret-button"> Press me... if you dare </button>
    <p id="secret-p" style="display: none"> Modules are fancy! </p>
    <script type="module" src="./secret-messages.js"> </script>
  </body>
</html>
```

The change here is subtle, can you spot it? In secret-messages.html, the only thing that changes is the addition of the attribute `type='module'` to the `<script>` element. Failure to do so can cause some browsers to throw an error. For example, in Chrome you might see this error:

[Uncaught SyntaxError: Cannot use import statement outside a module](./docs/module/es6-modules-chrome-error.webp)

And those are the basics of exporting and importing using the ES6 `export` and `import` syntax! If you have been following along with these code examples, see if you can update the `secret-image` project to use the exported functions from the module `dom-functions.js` before continuing on to the challenges below.

### ES6 Modules Challenge #1

Fill in the blank
In this module you will find two functions which have been declared for you, changeText() and changeToFunkyColor() but currently, they aren’t being exported.

Using the named export syntax, export changeText() and changeToFunkyColor() from this module.

function changeText(domElement, newText) {
  domElement.innerHTML = newText;
}
 
function changeToFunkyColor(domElement) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
 
  domElement.style.color = `rgb(${r}, ${g}, ${b})`;
}
 
// export the functions here
 
changeText, changeToFunkyColor
import
export
{ changeText, changeToFunkyColor }
eject
module.exports =
Click or drag and drop to fill in the blank

### ES6 Modules Challenge #2

Coding question
You are building a simple webpage that makes use of the module module.js. This module declares and exports two functions whose signatures are listed below:

changeText(domElement, newText): changes the text of the provided domElement to the provided newText.
changeToFunkyColor(domElement): changes the color of the provided domElement to a random color.
You will be editing the file main.js. Complete the tasks below:

Import changeText and changeToFunkyColor from ./module.js using the named import syntax.
Call changeText() to change the text of the element stored in the header variable to "I did it!".
Within the callback passed to setInterval, call changeToFunkyColor() passing in the element stored in the header variable.
Note: Upon completing this challenge, the text will change to “I did it!” and will be set to change color every 0.2 seconds.

12345678910111213
/* main.js */

// import the functions here, then uncomment the code below

const header = document.getElementById("header");

// call changeText here

Run

Run your code to check your answer

### ES6 Modules Challenge #3

Multiple choice
The `<script>` element below loads a JavaScript file which makes use of ES6 `import`/`export` syntax. Which of the following changes must be made in order to properly load this module and avoid browser errors?

```js
<script src="./my-module.js"> </script>
```

A `type="module"` attribute must be added to the opening `<script>` tag.

<script type="module" src="./my-module.js"> </script>

The file extension must be changed from `.js` to `.jsm`.

```js
<script src="./my-module.jsm"> </script>
```

A `type="ES6"` attribute must be added to the opening `<script>` tag.

```js
<script type="ES6" src="./my-module.js"> </script>
```

A `<module>` tag should be used instead of a `<script>` tag.

```js
<module src="./my-module.js"> </module>
```

### Renaming Imports to Avoid Naming Collisions

Inevitably, you will run into a situation where the resources you wish to import share a name with some other value that already exists in your program (or from another imported module).

For example, suppose you had access to two modules, `greeterEspanol.js` and `greeterFrancais.js`. Each exports a function called `greet()`:

```js
/* inside greeterEspanol.js */
const greet = () => {
  console.log('hola');
}
export { greet };
 
/* inside greeterFrancais.js */
const greet = () => {
  console.log('bonjour');
}
export { greet };
```

Now, let’s say you wanted to use each of these functions in a program, called main.js, that simulates a conversation between a spanish-speaker and a french-speaker.

```js
import { greet } from 'greeterEspanol.js';
import { greet } from 'greeterFrancais.js';
```

The code above will throw an error on line 2 due to the fact that the identifier `greet` has already been defined on line 1. Thankfully, ES6 includes syntax for renaming imported resources by adding in the keyword `as`. It looks like this:

```js
import { exportedResource as newlyNamedResource } from '/path/to/module'
```

Let’s see how this could work within `main.js`

```js
/* main.js */
import { greet as greetEspanol } from 'greeterEspanol.js';
import { greet as greetFrancais } from 'greeterFrancais.js';
 
greetEspanol(); // Prints: hola
greetFrancais(); // Prints: bonjour
```

Now, both of the imported functions can be called within `main.js` using their new identifiers, `greetEspanol()` and `greetFrancais()`.

### ES6 Modules Challenge #4

Fill in the blank
Consider the following functions being exported from the modules square-area.js and circle-area.js:

/* From square-area.js... */
export function area(side) {
  return side * side;
}
 
/* From circle-area.js... */
export function area(radius) {
  return Math.PI * radius * radius;
}
The file below, area-calculator.js, is programmed to print the area of a square and a circle to the console using these functions. However, because the exported values share the same name, they need to be renamed when they are imported! Fill in the code blanks below with the correct syntax for renaming these functions.

/* area-calculator.js */
 
import {  } from 'square-area.js';
import {  } from 'circle-area.js';
 
console.log('The area of a square with sides of length 5 is ' + squareArea(5));
console.log('The area of a circle with radius of length 5 is ' + circleArea(5));
circleArea
area as squareArea
squareArea
area as circleArea
Click or drag and drop to fill in the blank

### Default Exports and Imports

So far, the examples shown have used the named export syntax, in which a module’s resources are exported individually by name. Every module also has the option to export a single value to represent the entire module called the default export. Often, though not always, the default export value is an object containing the entire set of functions and/or data values of a module.

The syntax for exporting a default object looks like this:

```js
const resources = { 
  valueA, 
  valueB 
}
export { resources as default };
```

With this syntax, the object containing the module’s resources is first declared and then is exported on the next line. At first glance, it looks like the `resources` object is being exported as a named export. However, the clause `as default` renames the exported object to `default`, a reserved identifier that can only be given to a single exported value.

You may also see this shorthand syntax where the value follows `export default` is the default value to be exported:

```js
const resources = {
  valueA,
  valueB
}
export default resources;
```

### Importing default values.

The syntax for importing default exports looks like this:

```js
import importedResources from 'module.js';
```

Notice that the curly braces are gone from the import statement. This syntax is actually shorthand for `import { default as importedResources } from 'module.js` and the imported `default` value may be given any name the programmer chooses.

It should be noted that if the `default` export is an object, the values inside cannot be extracted until after the object is imported, like so:

```js
// This will work...
import resources from 'module.js'
const { valueA, valueB } = resources;
 
// This will not work...
import { valueA, valueB } from 'module.js'
```

Let’s return to the prior example. The dom-functions.js module from above could be rewritten to use default exports like so:

```js
/* dom-functions.js */
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
 
const changeToFunkyColor = (domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
 
  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}
 
const resources = { 
  toggleHiddenElement, 
  changeToFunkyColor
}
export default resources;
```

This default exports object can now be used within secret-messages.js like so:

```js
import domFunctions from '../modules/dom-functions.js';
 
const { toggleHiddenElement, changeToFunkyColor } = domFunctions;
 
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});
```

Notice how `toggleHiddenElement()` and `changeToFunkyColor()` are now methods of the imported object called `domFunctions` and are extracted using [ES6 destructuring syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment! It should be noted that the identifier `domFunctions` can be chosen as the programmer sees fit. If you recall, the syntax used in the snippet above is shorthand for:

```js
import { default as domFunctions } from '../modules/dom-functions.js';
```

Continue on to the challenges below before the final review at the end of the article.

### ES6 Modules Challenge #5

Coding question
In this module you will find two functions which have been declared for you, changeText() and changeToFunkyColor(). The website being rendered wants to make use of these functions but currently, they aren’t being exported.

Using the default export syntax, export an object representing the module and containing the changeText() and changeToFunkyColor() functions.

Note: Upon completing this challenge, the text will change to "You did it" and will be set to change color every 0.2 seconds.

12345678910111213
function changeText(domElement, newText) {
  domElement.innerHTML = newText;
}

function changeToFunkyColor(domElement) {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

Run

Run your code to check your answer

### ES6 Modules Challenge #6

Multiple choice
Consider the module below which exports a few values using the default export syntax:

/* article-data.js */
const resources = {
  articleTitle: "Implementing Modules using ES6 Syntax",
  numberOfChallenges: 6,
  minutesToComplete: 45
}
export default resources;
Which of the following is NOT a valid statement for importing this data?


import resources from './article-data.js'

import { default as articleData } from './article-data.js'

import { articleTitle, numberOfChallenges, minutesToComplete } from './article-data.js'

import articleData from './article-data.js'

### Review
In this article, you have learned the following:
- The benefits of implementing modular programs.
- How to use the ES6 export statement to `export` code from a file - meaning its functions and/or data can be used by other files/modules.
- How to use the ES6 import statement to `import` functions and/or data from another module.
- How to rename imported resources using the `as` keyword.
- How to export and import a default value.

Though this article covers the basics of using ES6 syntax to import and export modules, [MDN has an excellent article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) that provides an in-depth look at some additional features that ES6 has to offer.

## Implementing Modules using ES6 Syntax (Summarized)

In JavaScript, modules can be implemented for the purpose of reusing functions across different sections of code. 

**Setup**

> The intended module will be a JavaScript file (`.mjs` extension) contained in a `modules/` directory. The file(s) referencing/using the resources from the module also needs to have a `.mjs` extension. This setup is needed if modules are to be used in a NodeJS runtime environment.

> If the modules will be used in a web browser runtime environment instead, then the JavaScript files will instead use the `.js` extension. The `HTML` document referencing the JavaScript file however will need to be written as such: 

```html
<script type="module" src="./main.js"></script>
```

These links were helpful:
- [StackOverflow](https://stackoverflow.com/a/69899085/15781733)
- [Stanley Ulili's article](https://www.stanleyulili.com/node/node-modules-import-and-use-functions-from-another-file/#:~:text=To%20include%20functions%20defined%20in%20another%20file%20in%20Node.,functions%20using%20the%20dot%20notation.)
- [Medium -- How to use the "import" statement in Node.js](https://javascript.plainenglish.io/how-to-use-the-import-statement-in-node-js-d43ce83e5b44#:~:text=Using%20%E2%80%9C.mjs%E2%80%9D%20extension)

The module should contain various functions & have a general format as follows:

```js
const add2 = number => {
  return number + 2;
}

const modulus = number => {
  return Math.abs(number);
}

export { add2, modulus };
```

Notice the last line in the module: `export { add2, modulus };`. This is referred to as "named import syntax" in ES6 syntax. 

Alternatively, the "default export" syntax also works, where a single value is used to represent the entire module. The default export value is an object containing the entire set of functions and/or data values of a module.

```js
const add2 = number => {
  return number + 2;
}

const modulus = number => {
  return Math.abs(number);
}

const resources = {
  add2, modulus
}

// any of the below 2 exports works
export default resources;
export { resources as default };
```

Exporting resources has been covered, but we can only really use resources by importing it to files to use it.

If the module has utilized _named import syntax_, we import it as follows:

```js
// This is in another file, where we arre using the resources in the module.

import { exportedResourceA, exportedResourceB } from 'pathToModule';

// ...
```

But if the module instead utilized _default export_, we import it as follows:

```js
// This is in another file, where we arre using the resources in the module.

// This will work
import importedResources from 'module.js';
const { valueA, valueB } = resources;

// This will not work
import { valueA, valueB } from 'module.js'

// ...
```

Here are several tips for these import/export syntax:
- Note that we cannot apply a similar syntax as we did for _named import syntax_ here, as we will need to import the object first and then extract the values inside. This is done so because the `default export` is an object. There are cases when the `default export` may just be a single function, in which case, the `import importedResources from 'module.js';`

- `import importedResources from 'module.js';` is short for `import { default as importedResources } from 'module.js`

- The imported default value may be given any name the programmer chooses, so `import `**`importedResources`**` from 'module.js';` or `import `**`domFunctions`**` from 'module.js';` works!


