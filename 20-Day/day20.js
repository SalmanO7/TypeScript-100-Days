// Array Map,Filter and Reduce Method!
// Starts with a list of numbers
// using Array Map Method
var nmbrs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var doubleNumbers = nmbrs.map(function (nmbr) {
    return nmbr * 2;
});
console.log(doubleNumbers);
// A mixed bag of items, and Catch String Data Type
// using Array Filter Method
var mixedBag = ["Apple", "Banana", 1, 2, 3, 4, "Airplan", 4, "tomato", 9];
var CatchStringDataType = mixedBag.filter(function (item) { return typeof item === "string"; });
// showing the list of string Data types
console.log(CatchStringDataType);
// This line checks each item: if its's a word, it goes into the new list.
// A list of Grads
// Now Using Array Reduce Method
var grades = [88, 90, 92, 85, 96, 45, 62];
// Calculate the AVerage Grades
var averageGrade = grades.reduce(function (total, grade) {
    return total + grade / grades.length;
}, 0);
// Showing The average Grades
console.log(averageGrade);
