//  Create a Counter from 30 to 0

let intervalID;
function getCount(counter) {
    if(counter === 0) {
        clearInterval(intervalID)
    }
  if(counter!==0) {
    console.log(counter)
    clearInterval(intervalID)
    intervalID = setInterval(getCount,1000, counter-1)
  
  }
}

getCount(30)

/*
let intervalID; - This declares a variable intervalID which will be used to store the ID returned by setInterval function.

function getCount(counter) { ... } - This defines a function called getCount which takes a parameter counter.

if (counter === 0) { ... } - This checks if the counter is equal to 0. If it is, it clears the interval using clearInterval(intervalID), effectively stopping the countdown.

if (counter !== 0) { ... } - This checks if the counter is not equal to 0. If it's not, it logs the current value of counter to the console using console.log(counter).

clearInterval(intervalID) - This clears any previous interval that might have been set, ensuring only one interval is running at a time.

intervalID = setInterval(getCount, 1000, counter - 1) - This sets a new interval using setInterval function. It calls the getCount function every 1000 milliseconds (1 second) with the counter - 1 as an argument. This effectively starts a countdown timer
*/