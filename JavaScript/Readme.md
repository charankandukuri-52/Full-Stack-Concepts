# Java Script Internal Process

### Executing a line

Since i am new to this language, i am using a traditional way of stepping into the language, that is printing 'Hello World'. Now when i run the file using the command node <FileName>.js, Java Script Engine comes into the picture, it parses the code by breaking it into smaller peices. I have used console.log in the code, now it would understand that console is a global object in the environment and log() is a method of the console object, this method would take the string as aurgument and calls the functionto give us the output 'Hello world'. In backend Logging would take all the parameters such as time stamps etc, and logs it into info level, console.warn() logs into warning level and console.error() logs it into error level.
