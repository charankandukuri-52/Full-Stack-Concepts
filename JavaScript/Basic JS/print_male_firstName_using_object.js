
//  Creating an Array of Objects

// we have an array called persons that contains multiple objects, each representing a person. Each object has two properties: firstName and gender, with corresponding values for each person.
let persons = [
    {
        firstName:'charan',
        gender:'Male',
    }, 
    {
        firstName:'Chaitanya',
        gender:'Male'
    },
    {
        firstName:'Hari Priya',
        gender:'Female'
    }
]
// Now, we have a for loop that iterates over each object in the persons array. It starts at index 0 and continues until the index is less than the length of the persons array.
for(let i=0; i<persons.length; i++) {
    if(persons[i]["gender"] === 'Male') {
        console.log(persons[i]['firstName'])
    }
}

// Within the loop, there's an if statement that checks if the gender property of the current person object is equal to 'Male'. If it is, then it prints the firstName of that person to the console.
