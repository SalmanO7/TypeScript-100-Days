// creates a Promise that resove with "Hellow World" after 2 seconds;
var helloPromise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Hellow World");
    }, 2000);
});
helloPromise.then(function (msge) { return console.log(msge); });
//After 2 seconds, "Hello World" will be logged to the console.
//2 Creates a promise that either resolve or rejects based on a condition;
var conditionPromise = new Promise(function (res, rej) {
    var success = Math.random() > 0.5;
    if (success) {
        res("Success");
    }
    else {
        rej(new Error("Failed "));
    }
});
conditionPromise.then(function (result) { return console.log(result); }).catch(function (err) { return console.log(err.message); });
// This code will randomly log either "Success" or "Failure" BAsed on the outcome of the promise.
//Example using Promise.all to wait for multiple promises to resolve
var promise1 = Promise.resolve(3);
var promise2 = 42;
var promise3 = new Promise(function (resolve) {
    setTimeout(resolve, 1000, "Foo");
});
Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values);
});
// This demonstrases how Promise.all waits for all promises to resolve and then logs the array of thir results.
