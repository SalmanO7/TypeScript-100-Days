// This function accepts a callback function and invokes it with given arguments
function executCallback(
    callback: (agr1: number, arg2: number) => void,
    agr1: number,
    arg2: number): void { callback(agr1, arg2); }
//Example Callback function that adds two numbers

const add = (a: number, b: number) => {
    console.log(a + b)
}
executCallback(add, 10, 20);

// 2 This array of numbers will be filtered 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Uses .filter() with a call back function to filter out numbers greathen then 4
const numbersFilter: Number[] = numbers.filter((nmbr) => {
    return nmbr > 4
})
console.log(numbersFilter)

// 3 Function that uses a callback pattern, including error handling
function fetchData(
    callback: (err: Error | null, data?: string) => void): void {
    const error = new Error("Failed to fetch data");
    const data = "Some data"

    // Simulate fetching data with a chance of error
    if (Math.random() > 0.5) {
        callback(null, data);
    } else {
        callback(error);
    }
}

// Using the fetchData function with error handling in the callback
fetchData((err, data) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(data);
    }
})
//Demonstrates a callback pattern where errors are handled gracefully