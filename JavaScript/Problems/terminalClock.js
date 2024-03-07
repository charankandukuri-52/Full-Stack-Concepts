
function showTime() {
    const d  = new Date()
    let hours =  d.getHours()
    let minutes =  d.getMinutes()
    let seconds =  d.getSeconds()
    hours = (hours<10)? ("0"+hours):hours
    minutes = (minutes<10)? ("0"+minutes):minutes
    seconds = (seconds<10)? ("0"+seconds):seconds
    let time = hours+" : "+minutes+" : "+seconds
    process.stdout.write(time)
    intervalId = setInterval(showTime, 1000)
    process.stdout.cursorTo(0)

}


showTime()