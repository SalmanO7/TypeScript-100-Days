// #1 Finds the square root of 144
const squareRoot: number = Math.sqrt(144);

console.log(`The square root of 144 is ${squareRoot}.`);	


// #2 Generates a random integer b/w 1 and 10
function generateRandomNumber(): number {
    return Math.floor(Math.random() * 10) + 1;
}

console.log(generateRandomNumber());

// #3 Calculates the absolute difference between -5 and 5

const absoluteDifference = Math.abs(-5 - 5);

console.log(`The absolute difference between -5 and 5 is: ${absoluteDifference}.`);
