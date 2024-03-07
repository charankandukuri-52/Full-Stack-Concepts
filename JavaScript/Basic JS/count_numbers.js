let endRange = 1000
let startRange = 0
for(let pointer = startRange ; pointer<= endRange; pointer++) {
    console.log(pointer)
}


// Initialization:

// let endRange = 1000;: Here, we're defining a variable named endRange and setting its value to 1000. This will be the last number we want to count up to.
// let startRange = 0;: We're also defining a variable named startRange and setting its value to 0. This is where we want our counting to begin.

// Loop:
// for (let pointer = startRange; pointer <= endRange; pointer++) { ... }: This line starts a loop. A loop is like a repetitive task that the computer does automatically. Here's what each part does:
// let pointer = startRange;: We're creating a new variable called pointer and setting its initial value to the value of startRange, which is 0.
// pointer <= endRange;: This is the condition that the loop will check before each iteration (repetition). It says, "keep repeating the loop as long as the pointer is less than or equal to endRange".
// pointer++: This is the part that tells the loop how to change the value of pointer after each iteration. pointer++ is the same as pointer = pointer + 1. So, it increases the value of pointer by 1 after each iteration.

// Loop Body:
// console.log(pointer);: This line of code is inside the curly braces { ... } of the loop. It's the action that we want to repeat. In this case, it prints the value of pointer to the console. So, each time the loop repeats, it prints the current value of pointer.
// Putting it all together, this loop starts counting from 0 and continues counting up to 1000, printing each number along the way.