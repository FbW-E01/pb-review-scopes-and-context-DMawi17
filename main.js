// # Review - Scopes and Contexts

// 1. What does the following print and why? Add your answer as a multi-line comment

/*
console.log(name) will print 'Joel' since its declare with the var keyword it 
becomes a global variable.
console.log(likes) will throw an error because, likes a local variable within if
statement and can't be accessed from outside.
*/

// 2. What does the following print? Add your answer as a multi-line comment

/*
`this` alone will refer to the global object (global) in Node.js and the (window) in the browser. Since function x is in the global object, it has the
default binding for `this`. When it's called, prints variables and functions
that are available anywhere. 
The log outside the function refers to the same global object but since it's 
not within the function, it has no default binding so it prints an empty object.
*/

// 3. What does the following print? Add your answer as a multi-line comment

/* Prints an empty object.
The new keyword create an empty object and assign it to `this`. */

// 3. What does the following print? Add your answer as a multi-line comment

/* It print "HELLO WORLD!"
Inside function a nothing to be executed. Inside function b it will log `test`
and print its value from the outer scope. Function c never been called. */

// **_SURPRISE_ Xtra mini review!**

// 4. Write a function that returns a random number.

const randomNumber = () => Math.random();
console.log(randomNumber());

// 5. Write a function that prints the message `"“Meow” means “woof” in cat.”"`

const woofMeansMeow = (str) => {
  console.log(str);
}
woofMeansMeow(`"“Meow” means “woof” in cat.”"`);

// 6. Write a function that takes in one variable and *returns* the type of that variable

let unDefined; 
const typeOfVar = v => typeof v;
console.log(typeOfVar(unDefined));

// 7. Write a function that takes in ~a string and returns the first letter in that string

const firstLetter = (l) => l[0];
console.log(firstLetter('firstL'));

// 7. Write a function that takes in an array and returns the first item in that array

const firstElement = arr => arr[0];
console.log(firstElement([10, 5, 2]));

// 8. Write a function that takes in a string, and then returns true if that string has 3 characters, otherwise it should return false.

const toBoolean = str => str.length === 3 || false;
console.log(toBoolean("the"));