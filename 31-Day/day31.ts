// 1 this function shows every detail about an object
const logObjectProperties = (obj: object) => {

    for (const property in obj) {
        console.log(`${property}: ${obj[property]}`)
        // Shows the property name it's value
    }
}

// using the function with a car object
logObjectProperties({
    make: "Toyota",
    model: "Corolla",
    year: "2009",
    color: "Black",
})
// it tells us each piece of information stored the car

// 2 This function counts how many charactors are in a string

const StringLength = function (str: string) {
    return str.length
}
// Example: measuring the length of a name 
console.log(StringLength("Muhmmad Salman"))

// 3 This function changes string to upperCase and then to lowerCase
console.log('\n ')

const convertCase = (str2: string) => {
    let upperStr = str2.toUpperCase();
    let lowerStr = str2.toLowerCase();

    return `UpperCse: ${upperStr}, LowerCse: ${lowerStr}`
}

// Example: chainging the case of "Hellow World"
console.log(convertCase("Hello World!"))