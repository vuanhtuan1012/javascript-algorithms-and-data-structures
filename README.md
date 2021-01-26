# Javascript Algorithms and Data Structures

Notes on Javascript Algorithms and Data Structures at [freeCodeCamp](https://www.freecodecamp.org/learn).

- [x] [Basic Javascript](#1-basic-javascript)
- [ ] [ES6](#2-es6)
- [ ] Regular Expressions
- [ ] Debugging
- [ ] Basic Data Structure
- [ ] Basic Algorithm
- [ ] Object Oriented Programming
- [ ] Functional Programming
- [ ] Intermediate Algorithm Scripting
- [ ] JavaScript Algorithms and Data Structures Projects

## 1. Basic Javascript

### 1.1 Array operators

- `unshift`: add an element to the beginning of an array, return new length of the array.
- `push`: add an element to the end of an array, return new length of the array.
- `shift`: remove the first element in an array, return removed item.
- `pop`: remove the last element in an array, return removed item.

### 1.2 Boolean operators

- `===` : strict equality, compare value & type.
- `== `: equality, convert to common type before comparing
- `!=`: inequality
- `!==`: strictly inequality

### 1.3 Object

- object likes dict in Python, accessing a property by dot `.` or square brackets `[]`.
- remove a property: `delete` obj.propName
- add a property: obj`.`newProp = value
- check whether object has a property or not: obj`.hasOwnProperty`(propName)

### 1.4 Others

- `typeof` var: return the type of variable `var`.
- `JSON` stands for JavaScript Object Notation.
- `parseInt(str, radix=10)`: parses a string and returns an integer, second argument specifies the base of the number in the string.
- conditional operator `? :`: condition `?` expression if the condition is true `:` expression if the condition is false.

## 2. ES6

ECMAScript is a standardized version of JavaScript with the goal of unifying the language's specifications and features. As all major browsers and JavaScript-runtimes follow this specification, the term _ECMAScript_ is interchangeable with the term _JavaScript_.

ECMAScript 5 (ES5) specification of the language, finalized in 2009. But JavaScript is an evolving programming language. The most recent standardized version is called ECMAScript 6 (ES6), released in 2015. This new version of the language adds some powerful features, including:
- [`let`  and  `const`](#21-let-and-const)
- [Arrow functions](#22-arrow-functions)
- Classes
- Modules
- Promises
- Generators

### 2.1 `let` and `const`

Problem of `var`:
- a variable can be re-declared without any errors.
- a variable declared by `var` has global scope.

That's why ES6 introduces `let`:
- `let` declares a variable and issues an error if that variable has already been declared before.
- if a variable is declared by `let` inside a block, statement, or expression, its scope is limited to that block, statement, or expression.

Read-only variable:
- `const` keyword allows to declare a read-only variable. It means that, once a variable is assigned, we cannot reassigne it.

Example:
```js
const PI = 3.14;
PI = 5; // error issues
```

- Problem of `const`: if we assign a constant variable to an array or an object, we cannot reassign that variable but we still can change the value of array, object.
```js
const myArray = [2, 3, 4]
myArray[0] = 5; // works fine
```

- `Object.freeze()` function prevents data mutation.
```js
let myArray = [2, 3, 4]
Object.freeze(myArray)
myArray[0] = 5; // will be ignore, mutation is not allowed.
```

###  2.2 Arrow functions

In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use **arrow function syntax**
```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

When there is **no function body**, and **only a return value**, arrow function syntax allows to **omit** the keyword `return` as well as the brackets surrounding the code.
```js
const myFunc = () => "value";
```

#### Arrow functions with parameters

We can pass arguments into an arrow function.
```js
const doubler = (item) => item * 2;
doubler(4);  // returns 8
double(3);  // return 6
```

If an arrow function **has a single parameter**, the parentheses enclosing the parameter may be ** omitted**.
```js
const doubler = item => item * 2;
doubler(4);  // returns 8
double(3);  // return 6
```

It is possible to pass more than one argument into an arrow function.
```js
const multiplier = (item, multi) => item * multi;
multiplier(4, 2); // returns 8
```

#### Set default parameters to functions

ES6 introduces default parameters for functions.
```js
const  increment = (number, value=1) => number + value;
```