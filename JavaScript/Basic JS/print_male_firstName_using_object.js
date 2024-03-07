
//  Creating an Array of Objects
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
for(let i=0; i<persons.length; i++) {
    if(persons[i]["gender"] === 'Male') {
        console.log(persons[i]['firstName'])
    }
}
