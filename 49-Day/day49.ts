// 1 Synchronous example
console.log("Before Synchronous operation")
for (let i = 0; i < 5; i++) { console.log(i) }
console.log("After Synchronous operation")

// 2 Asynchronous Example 
console.log("Before Asynchronous operation")
setTimeout(() => {
    console.log("Asynchronous operation completed")
}, 1000);
console.log("After Synchronous operation setup")