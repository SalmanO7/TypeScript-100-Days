// 1 This function formats the current date as DD-MM-YYYY
var getCurrentDateFormatter = function () {
    var now = new Date();
    var day = String(now.getDate());
    var month = String(now.getMonth() + 1);
    var year = now.getFullYear();
    return "".concat(day, " ").concat(month, " ").concat(year, "\t");
};
console.log(getCurrentDateFormatter());
// 2 Calculates how many days are left until New Year's Day
function daysUntilNewYear() {
    var today = new Date();
    var newYear = new Date(today.getFullYear() + 1, 0, 1); // January 1st of next year
    var diff = newYear.getTime() - today.getTime(); // Difference in milliseconds
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Converts to days
    return days;
}
console.log(daysUntilNewYear() + " days until New Year.");
// Tells us how many days there are until the next New Year's Day.
// #3 Generates a Date object for the text ocurrence of a specific birthday
var getNextBirthday = function (month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day);
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
};
// Replace with your birth month and day
var nextBirthday = getNextBirthday(10, 26);
console.log("NExt Birthday on: " + nextBirthday.toLocaleDateString());
