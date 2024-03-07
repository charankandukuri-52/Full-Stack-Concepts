let startTimes,EndTimes;
function logData() {
   const EndTime = new Date()
   console.log(EndTime - startTimes)
}
function startFunction() {

    const startTime = new Date()
    setTimeout(logData, 1000)
    startTimes = startTime
}

startFunction()


/*
Global Variables:

startTimes and EndTimes are declared globally. They seem to be intended to store the start and end times of some process.
logData Function:

This function is defined to log the time elapsed between the stored startTimes and the current time (EndTime).
EndTime is set to the current time when the function is called.
It logs the difference between EndTime and startTimes.
startFunction Function:

This function is intended to start some process.
It sets startTime to the current time.
It then schedules the logData function to be executed after 1000 milliseconds (1 second) using setTimeout.
Finally, it stores the startTime in the global variable startTimes.
measureSetTimeOut Function:

This function appears to be incomplete or not called anywhere in the provided code. It seems like it's intended to measure the elapsed time between startTimes and EndTimes.
Execution:

startFunction is called at the end, which initializes the process.
After 1 second (setTimeout delay), logData is called, which logs the time elapsed since the process started.
*/