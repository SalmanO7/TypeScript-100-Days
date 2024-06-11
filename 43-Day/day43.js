// Domenstrates using console.log() inside a loop to track variable values
for (var i = 0; i < 10; i++) {
    console.log(i, 'i value: ' + i);
}
// This loop iterates five times, logging the value of 'i' during each iteration to help debugging.
// 2 Demonstrates using a try-catch block to handle errors
try {
    throw new Error("Somthing went wrong");
}
catch (error) {
    console.log(error.message);
}
// this code tries to exicute a block that throws an error and the catch the block handles the erroe gracefully.
// 3 sample code snippet for setting a breakpoint
console.log("Before BreakPoint");
// set a breakpoint on the following line using your browser's developer tools
console.log("This line has a breakpoint set on it in the browser's developer tools");
console.log("After BreakPoint");
