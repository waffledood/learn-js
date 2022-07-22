# learn-js
A personal repository to collate my learnings for JavaScript

## Data Types 
- Number (Primitive)
  any number, including numbers with decimals, (`2`, `3.142`, `100`)
- String (Primitive)
  grouping of characters on your keyboard, (`"this is a String"`, `'this is also a String'`)
- Boolean (Primitive)
  boolean values are only ever 1 of 2 values (`true`, `false`)
- Null (Primitive)
  this data type represents the intentional absnce of a value, and is represented by the keyword `null` (without quotes!)
- Undefined (Primitive)
  this data type is denoted by the keyword `undefined` (without quotes). It also represents the absence of a value although it has a different use than `null`. `undefined` means that a given value does not exist
- Symbol (Primitive)
  A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.
- Object
  Collections of related data.

## Arithmetic Operators 
- Add: `+`
- Subtract: `-`
- Multiply: `*`
- Divide: `/`
- Remainder/Modulo: `%`

## String Concatenation 
Similar to Java, JavaScript concatenates data types with the use of the `+` operator. Do note however that since Strings in JavaScript can be represented by enclosing `"`s or `'`s, we can concatenate Strings with `"` or `'` (similarly to Python).

## Properties 
Each data has specific properties that are passed down to each instance. Such properties are accessible with the dot operator (`.`).
e.g. `'Hello World!'.length` returns `11`.

## Methods
Similar to properties, each data has specific methods that can be performed. These methods are characterized by 3 features: 
1. a period (the dot operator, `.`)
2. the name of the method 
3. opening & closing parentheses 
4. arguments (optional - some methods don't require arguments)

## Built-In Objects 
In addition to console, there are other additional objects built into JavaScript. 
These include the `Math`, `Integer`, ... libraries.

## Variables 
Variables are containers for values. 
A variable can be created in the following ways: 
* Pre-ES6
  - `var myName = 'Sam';` 
* ES6
  - `let myName = 'Sam';`
    Note that the usage of `let` signals the variable _can_ be reassigned a different value!
    In the event a variable isn't assigned at declaration, its default value will be `undefined`, as the example follows. 
    `let myName;`
  - `const myName = 'Sam';` 
    The `const` keyword is short for constant & strictly defines a variable cannot be reassigned. Trying to reassign a `const` variable throws `TypeError`.
    Additionally, `const` variables **MUST** be assigned a value when declared.

## Mathematical Assignment Operators 
- `+=`: `item1 += item2` performs the same as `item1 = item1 + item2`
- `-=`: `item1 -= item2` performs the same as `item1 = item1 - item2`
- `*=`: `item1 *= item2` performs the same as `item1 = item1 * item2`
- `/=`: `item1 /= item2` performs the same as `item1 = item1 / item2`

## Increment & Decrement Operators
- `++` 
- `--` 

## String Interpolation (ES6)
In the ES6 version of JavaScript, we can insert, ot _interpolate_, variables into strings using template literals (Similar to `f-strings` in Python).
```js
let myPet = 'cat';
console.log(`I own a pet ${myPet}.`);
```
Note these important characteristics:
- A template literal uses backticks ```, not quotation marks `"`!
- Placeholders are used inside the template literal & resemble `${myPet}`

## `typeof` operator 
The `typeof` operator checks the value of the data type.

