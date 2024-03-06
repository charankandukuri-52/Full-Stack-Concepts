var name = "John"; // Declaration and initialization
let age; // Declaration without initialization
age = 30; // Initialization later
var num = 10; // Number
var str = "Hello"; // String
var bool = true; // Boolean
var obj = { key: "value" }; // Object
var arr = [1, 2, 3]; // Array
// In JavaScript, variable declarations are hoisted to the top of their containing scope during compilation. However, only the declarations are hoisted, not the initializations.
console.log(x); // undefined
var x = 5;
// Code in line 10 and 11 is equivalent to 
var x;
console.log(x); // undefined
x = 5;
// JavaScript is a dynamically typed language, meaning you can assign different data types to the same variable
var x = 10; // Number
x = "Hello"; // String
