// Implicit coercion
let num = 10 + "5"; // num will be "105" (number 10 is implicitly coerced to a string)
let isTrue = "0" == false; // isTrue will be true (string "0" is implicitly coerced to false)

// Explicit coercion
let strNum = String(123); // strNum will be "123" (number 123 is explicitly coerced to a string)
let boolValue = Boolean(""); // boolValue will be false (empty string is explicitly coerced to false)
