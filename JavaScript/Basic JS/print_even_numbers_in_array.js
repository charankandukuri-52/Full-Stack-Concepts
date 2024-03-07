// Here, we declare a variable named working_array and initialize it as an empty array. This array will store our numbers from 1 to 1000.
let working_array = []
//  In this part, we use a loop to add numbers from 1 to 1000 into the working_array. We start from 1 (let pointer = 1), go up to 1000 (pointer <= 1000), and increment pointer by 1 each time (pointer++). Inside the loop, working_array.push(pointer) adds the current value of pointer to the end of the working_array.
for(let pointer = 1; pointer <= 1000; pointer++) {
    working_array.push(pointer)
}
// Here, we start another loop to iterate through each element of the working_array. We initialize pointer to 0, and the loop runs as long as pointer is less than the length of working_array. We increment pointer by 1 each time (++pointer).
for(let pointer = 0; pointer<working_array.length; ++pointer) {
    // Accessing elements in array
    // General Syntax is array_name[index] => value present in that index of the array
    if(working_array[pointer] % 2 === 0) {
        console.log(working_array[pointer])
    }
}
// Inside this loop, we access each element of the working_array using its index. working_array[pointer] retrieves the value at the current index (pointer) of the array. We then check if the current element is even by using the modulo operator %. If the remainder of dividing the element by 2 is 0 (i.e., it's evenly divisible by 2), we print that element to the console using console.log()