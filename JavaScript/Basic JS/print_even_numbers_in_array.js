let working_array = []
// Adding numbers from 1 to 1000 in array
for(let pointer = 1; pointer <= 1000; pointer++) {
    working_array.push(pointer)
}
//  Now Working Array has elements from 1 to 1000 
for(let pointer = 0; pointer<working_array.length; ++pointer) {
    // Accessing elements in array
    // General Syntax is array_name[index] => value present in that index of the array
    if(working_array[pointer] % 2 === 0) {
        console.log(working_array[pointer])
    }
}