# JavaScript Syntax - Part 2

## Arrays 

### Declaring Arrays with `let` & `const`

You may recall that you can declare variables with both the `let` and `const` keywords. Variables declared with `let` can be reassigned whilst variables declared with the `const` keyword cannot be reassigned. 

However, elements in an array declared with `const` remain mutable. Meaning that we can change the contents of a `const` array, but cannot reassign a new array or a different value to the `const` variable.

```js
let array1 = ['spoon', 'fork']
let array2 = ['milk', 'cereal']

array1[0] = 'knife'                 // allowed!
array2[0] = 'kiwi'                  // allowed!

array1 = ['knife', 'soup spoon']    // allowed!
array2 = ['kiwi', 'almond']         // not allowed!
```

Note:
- In JavaScript, declaring an array with the keyword `const` means that variable will always be holding an array of a certain size (size of the array it was declared with) throughout its lifetime.

### `.length` property of arrays

We can use the `.length` property to find out the length of arrays.

```js
let array1 = [1, 2, 3, 4, 5];
console.log(array1.length);
```


