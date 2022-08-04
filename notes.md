# Notes 

## [`reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) 

The `reduce()` function can be used, with a user-supplied "reducer" function, across an array of elements to reduce such an array to a single value that represents the result of running the reducer across all elements in the array.

```js
[1,2,3,4,5].reduce((prevVal, currVal) => prevVal + currVal, 0)
[1,2,3,4,5].reduce((prevVal, currVal) => prevVal + currVal)
```
Both statements return the sum of the elements in the array: `15`. 

### Calculating the total length of all Strings in an array

```js
> ["a", "bc", "defg", "h"].reduce((prevVal, currVal) => prevVal + currVal.length, 0)
15
```
The above statement returns the total length of all strings in the array. Because an `initialValue` was provided, the value `0` is used as the previous value `prevVal` & the first element in the array will be set as the current value `currVal`. 

```js
> ["a", "bc", "defg", "h"].reduce((prevVal, currVal) => prevVal + currVal.length)
'a241'
```
The above statement does not return the total length of all strings in the array, as intended. This is because an `initialValue` was not provided & the first element in the array, `"a"`, was thus used as `prevVal`. 

```js
> ["a", "bc", "defg", "h"].reduce((prevVal, currVal) => prevVal.length + currVal.length)
NaN
```
The above statement also does not return the desired output. I've yet to understand it, but it seems that an erroneous calculations in the `reduce()` function causes the final result to just be `NaN`.
This is because I can modify the correct `reduce()` function from earlier to use a wrong variable & the result is still `NaN`.

`["a", "bc", "defg", "h"].reduce((prevVal, currVal) => prevVal + currVal.name, 0)` returns `NaN`.
