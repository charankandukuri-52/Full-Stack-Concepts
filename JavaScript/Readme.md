# Java Script Basic Concepts

### Executing a line

Since i am new to this language, i am using a traditional way of stepping into the language, that is printing 'Hello World'. Now when i run the file using the command node < FileName >.js, Java Script Engine comes into the picture, it parses the code by breaking it into smaller peices. I have used console.log in the code, now it would understand that console is a global object in the environment and log() is a method of the console object, this method would take the string as aurgument and calls the functionto give us the output 'Hello world'. In backend Logging would take all the parameters such as time stamps etc, and logs it into info level, console.warn() logs into warning level and console.error() logs it into error level.

## Variables

### let, var and const

In JavaScript, let, var, and const are used to declare variables, but they differ in terms of their scope, hoisting behavior, and mutability. Here's a comparison of these three variable declaration keywords:

Scope:

var: Variables declared with var have function scope or global scope, but not block scope. They are accessible throughout the function in which they are defined or globally if defined outside any function.
let: Variables declared with let have block scope, which means they are accessible only within the block (enclosed by {}) where they are defined.
const: Variables declared with const also have block scope like let. They are also accessible only within the block where they are defined.
Hoisting:

var: Variable declarations using var are hoisted to the top of their function or global scope. However, only the declarations are hoisted, not the initializations. This can sometimes lead to unexpected behavior.
let and const: Variables declared with let and const are hoisted to the top of their block, but they are not initialized until the actual declaration statement. This is known as the "temporal dead zone." Trying to access these variables before their declaration results in a ReferenceError.
Reassignment:

var and let: Variables declared with var and let can be reassigned new values after declaration.
const: Variables declared with const are constant, meaning their value cannot be reassigned once initialized. However, it's important to note that for objects and arrays declared with const, their properties or elements can still be modified.
Global Object Property:

var: Variables declared with var become properties of the global object (window in browsers) when declared in the global scope.
let and const: Variables declared with let and const do not become properties of the global object, even when declared in the global scope.
Use Cases:

Use var when you need variables with function scope or when you want to declare variables in the global scope.
Use let when you need block-scoped variables that can be reassigned.
Use const when you want to declare variables with block scope that should not be reassigned.
