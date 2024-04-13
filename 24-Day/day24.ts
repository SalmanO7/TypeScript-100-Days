// 1 this function adds a number and string that represents a number
function addNumberAndString(nmbr: number, strNumber: string) {
    // converts the string to a number and adds it to first number
    return 50 + Number(strNumber);
}

// Trying it with 50 + 5
console.log(addNumberAndString(50, "5"))
// the string "5" is turned into the number 5, and then added to 50.


// 2 This function multiplies two decimal numbers
const multiplyDecimals = function (nmbr1: number, nmbr2: number) {
    // Multiplies the numbers and rounds are the result to two decimal places.
    return Math.round(nmbr1 + nmbr2 * 100) / 100;
}

// Trying it with 0.1 and 0.2
console.log(multiplyDecimals(0.1, 0.2))
// After multiplying, we round to make result easier to read.

// 3  This function divides two numbers and finds the quotient and remainder
const dividAndRemainder = (dividend: number, divisor: number) => {
    // Calculates the quotient and remainder
    let quotient = Math.floor(dividend / divisor)
    let remainder = dividend % divisor;
    return { quotient, remainder }
}

//Trying it with 10 divided by 3
console.log(dividAndRemainder(10, 3));