// Array Map , Filter and Reduce Method!

// Starts with a list of numbers
// using Array Map Method
let nmbrs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let doubleNumbers = nmbrs.map((nmbr) => {
    return nmbr * 2
})
console.log(doubleNumbers)

// A mixed bag of items, and Catch String Data Type
// using Array Filter Method
let mixedBag = ["Apple", "Banana", 1, 2, 3, 4, "Airplan", 4, "tomato", 9]
let CatchStringDataType = mixedBag.filter((item) => typeof item === "string");
// showing the list of string Data types
console.log(CatchStringDataType)
// This line checks each item: if its's a word, it goes into the new list.

// A list of Grads
// Now Using Array Reduce Method
let grades = [88, 90, 92, 85, 96, 45, 62]

// Calculate the AVerage Grades
let averageGrade = grades.reduce((total, grade) => {
    return total + grade / grades.length
}, 0)
// Showing The average Grades
console.log(averageGrade)

