// creates a Promise that resove with "Hellow World" after 2 seconds;

const helloPromise = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("Hellow World");
    }, 2000)
});

helloPromise.then((msge) => console.log(msge));
//After 2 seconds, "Hello World" will be logged to the console.

//2 Creates a promise that either resolve or rejects based on a condition;
const conditionPromise = new Promise<string>((res, rej) => {
    const success = Math.random() > 0.5;
    if (success) {
        res("Success");
    } else {
        rej(new Error("Failed "));
    }
});

conditionPromise.then((result) => console.log(result)).catch((err) => console.log(err.message))
// This code will randomly log either "Success" or "Failure" BAsed on the outcome of the promise.


//Example using Promise.all to wait for multiple promises to resolve

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve) => {
    setTimeout(resolve, 1000, "Foo");
});
Promise.all([promise1, promise2, promise3]).then((result) => {
    console.log(result);
});
// This demonstrases how Promise.all waits for all promises to resolve and then logs the array of thir results.























