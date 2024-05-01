// 1 This function takes out the first 10 characters from any text

function extractFirstTenChar(str: string): string {
    return str.substring(0, 10);
}

// Example: Taking the first 10 charactors of a sentence
console.log(extractFirstTenChar("Hello, JavaScript World!"));


// 2 This function turns text into an actual number
const convertStrToNumber = function (str2: string): number {
    return Number(str2)
}

// Example: Changing "123" into a real number
console.log(convertStrToNumber("123"));


// 3 This function rounds a number to two decimal places
const roundTwoDecimalsPlaces = (nmbr: number) => {
    return Number(nmbr.toFixed(2))
}

//Example: Rounding pie to two decimal places
console.log(roundTwoDecimalsPlaces(3.14159))
//pie is now rounded off,