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
function measureSetTimeOut() {
console.log(EndTimes - startTimes)
}
startFunction()