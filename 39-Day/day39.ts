// 1 Checks the current hour and logs 'Good Morning' if it's before 12 PM

const CurrentTime = new Date();

if (CurrentTime.getHours() < 12) {
    console.log('Good Morning');
}
//This simple check helps us greet users appropriately based on the time of day.

// #2 This function check the user Grades

const checkGrades = function (grade: number) {
    if (grade >= 90) {
        return 'A'
    } else if (grade >= 80) {
        return 'B'
    } else if (grade >= 70) {
        return "C"
    } else if (grade >= 60) {
        return 'D'
    } else {
        return 'F'
    }
}
console.log(checkGrades(89));
console.log(checkGrades(79));

// #3 This function categorize a person's age group

const categorizeAge = (age: number) => {
    if (age < 2) {
        return 'baby'
    } else if (age < 4) {
        return 'todler'
    } else if (age < 13) {
        return 'kid'
    } else if (age < 20) {
        return 'teenager'
    } else if (age < 65) {
        return 'adult'
    } else {
        return 'elder'
    }
}

console.log(categorizeAge(31))
console.log(categorizeAge(12))
console.log(categorizeAge(66))

