// 1 This function mixes a text add a number into one text 
var conbineStringAndNumber = function (text, number) {
    // Joins the text and number into a single text
    return text + number;
};
// trying it out with "age: " and 18
console.log(conbineStringAndNumber("age: ", 18)); // Shows age: 18
//Here, we put together the texr and number.
// 2 This function find the leftover of dividing two numbers
var remainder = function (a, b) {
    // Gives back the leftover of a divided by b
    return a % b;
};
// Trying it with divided by 2
console.log(remainder(7, 4)); // shows 3
// This tells us the leftover, which is 1 here.
// 3 This function sees if both inputs are ture
function checkBothTrue(val, val2) {
    // Only says true if both val1 and val2 are true
    return val && val2;
}
//Trying it with true and false
console.log(checkBothTrue(true, false)); // shows false
// it checks two things, but since onw if false, the answer is false
