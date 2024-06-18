// This function accepts a callback function and invokes it with given arguments
function executCallback(callback, agr1, arg2) { callback(agr1, arg2); }
//Example Callback function that adds two numbers
var add = function (a, b) {
    console.log(a + b);
};
executCallback(add, 10, 20);
// 2 This array of numbers will be filtered 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Uses .filter() with a call back function to filter out numbers greathen then 4
var numbersFilter = numbers.filter(function (nmbr) {
    return nmbr > 4;
});
console.log(numbersFilter);
// 3 Function that uses a callback pattern, including error handling
function fetchData(callback) {
    var error = new Error("Failed to fetch data");
    var data = "Some data";
    // Simulate fetching data with a chance of error
    if (Math.random() > 0.5) {
        callback(null, data);
    }
    else {
        callback(error);
    }
}
// Using the fetchData function with error handling in the callback
fetchData(function (err, data) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log(data);
    }
});
//Demonstrates a callback pattern where errors are handled gracefully
