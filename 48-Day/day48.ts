// Uses setTimeout to log a message after a 2-second delay.

const twoSecondDelay = setTimeout(() => {
    console.log(`This message delay 2 seconds`)
}, 1000);

// 2
console.log("Start")
setTimeout(() => {
    console.log("CallBack Executed")
}, 0)
console.log("End")
// Althrough the time is 0, "CallBack Executed" is logged affter "End" due to the event loop.
