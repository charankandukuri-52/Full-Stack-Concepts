
// Here, we are defining a function named findSum. This function takes two parameters, a and b. Inside the function, it returns the sum of a and b.
function findSum(a,b) {
    return a+b
}
// we are calling the findSum function with the arguments 3 and 5. The function calculates the sum of these two numbers (3 + 5), which equals 8. This result is stored in the variable value
let value   = findSum(3,5)
// we use console.log() to print the value of value to the console. So, when you run this code, you'll see 8 printed in the console.
console.log(value)


// Flow of Execution of a Program

/*
Function Definition:

The program starts by defining a function named findSum.
Inside this function, there are two parameters a and b, which represent the numbers to be added together.
The function body contains a single line of code return a + b;, which calculates the sum of a and b and returns the result.
Function Call:

After defining the function, the program moves to the next line where the findSum function is called with arguments 3 and 5.
This triggers the execution of the findSum function with a set to 3 and b set to 5.
Inside the function, a is 3 and b is 5, so the expression a + b evaluates to 3 + 5, which equals 8.

Return Value Assignment:
The result of the function call (8) is then assigned to the variable value using the let keyword.

Console Output:
Finally, the program moves to the next line where console.log(value) is executed.
This prints the value of value (which is 8) to the console.
*/