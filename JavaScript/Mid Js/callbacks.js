function callbacks(a,b, functionToProcess) {
const value = functionToProcess(a,b);
return value;
}

function mutliply(a,b) {
    return a*b;
}

function sum(a,b) {
    return a+b
}

const ans = callbacks(1,2,mutliply)
const bns  = callbacks(1,2,sum)
console.table([ans,bns])


/*
We have a function called callbacks that takes three arguments: a, b, and functionToProcess.
Inside callbacks, we invoke functionToProcess with the arguments a and b and store the result in the value variable.
We then return the value.
There are two other functions defined: multiply and sum, which perform multiplication and addition operations, respectively.
We then call callbacks twice: first with the arguments 1, 2, and multiply, and second with the arguments 1, 2, and sum.
The results are stored in variables ans and bns.
Finally, we log the results using console.table.
*/

//  Callbacks According to the above Example:
/*
In this code, multiply and sum are callback functions. They are passed as the third argument to the callbacks function.
When callbacks is called, it executes the functionToProcess callback function with the provided arguments a and b.
This allows for dynamic behavior because the specific operation (multiplication or addition) is determined by the callback function passed to callbacks.
The callbacks function serves as a higher-order function, meaning it takes another function as an argument and uses it to perform a specific task
*/