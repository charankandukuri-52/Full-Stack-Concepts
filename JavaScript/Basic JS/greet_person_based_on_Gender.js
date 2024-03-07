gender  = 'Male'
if(gender === 'Male'){
    console.log('Hi Sir');
}
else if(gender === 'Female') {
    console.log('Hi Madam');
}


/*

Setting the gender variable: First, we set the variable gender to the string value 'Male'. This represents the gender of a person.

Conditional statement (if-else if): The if statement checks whether the value of the gender variable is 'Male'. If it is, the code inside the curly braces {} following the if statement will be executed. Otherwise, it will move to the else if part.

Logging a greeting: Inside the if block, there's a console.log() statement that prints 'Hi Sir' to the console if the condition gender === 'Male' is true. So, if the gender is 'Male', it will print 'Hi Sir'.

else if condition: If the gender is not 'Male', the program will move to the else if condition. Here, it checks whether the gender is 'Female'. If it is, the code inside the corresponding curly braces {} will be executed.

Logging a different greeting for female: Inside the else if block, there's another console.log() statement that prints 'Hi Madam' to the console if the condition gender === 'Female' is true. So, if the gender is 'Female', it will print 'Hi Madam'.

Understanding the output: In this code, since the gender is set to 'Male', the condition gender === 'Male' is true, and thus the code inside the if block will execute. Therefore, it will print 'Hi Sir' to the console.

*/