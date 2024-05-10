// 1 This function formats the current date as DD-MM-YYYY
const getCurrentDateFormatter = () => {
    const now = new Date();
    const day = String(now.getDate())
    const month = String(now.getMonth() + 1)
    const year = now.getFullYear();

    return `${day} ${month} ${year}	`
}

console.log(getCurrentDateFormatter())

// 2 Calculates how many days are left until New Year's Day
function daysUntilNewYear(): number {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1); // January 1st of next year
    const diff = newYear.getTime() - today.getTime(); // Difference in milliseconds
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Converts to days
    return days;
}

console.log(daysUntilNewYear() + " days until New Year.");
// Tells us how many days there are until the next New Year's Day.


// #3 Generates a Date object for the text ocurrence of a specific birthday
const getNextBirthday = (month: number, day: number) => {
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year, month - 1, day);
    if(birthday<today){
        birthday.setFullYear(year + 1);
    }
    return birthday;
}

// Replace with your birth month and day
const nextBirthday = getNextBirthday(10,26);
console.log("NExt Birthday on: " + nextBirthday.toLocaleDateString());