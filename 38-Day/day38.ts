// #1 This function checks if a year is a leap year

function isLeapYear(year: number) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

console.log(isLeapYear(2020))
console.log(isLeapYear(1900))

// #2 This function checks if a numberis divisible by both 2 and 3

const isDivisibleByTwoAndThree = (nmbr: number) => {
    return nmbr % 2 == 0 && nmbr % 3 == 0;
}
console.log(isDivisibleByTwoAndThree(6))
console.log(isDivisibleByTwoAndThree(12))

// #3 This function campares Two Strings, ignoring case sensitivity

const areStringEqualIgnoreCase = (str1: string, str2: string) => {
    return str1.toLowerCase() === str2.toLowerCase();
}

console.log(areStringEqualIgnoreCase('salman','SALMAN'))
console.log(areStringEqualIgnoreCase('salman','SAlman'))