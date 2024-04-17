// 1 This function adds two numbers and returns the result

function addTwiNumbers(nmbr1: number, nmbr2: number) {
    // Calculate the two numbers
    return nmbr1 + nmbr2
}
console.log(addTwiNumbers(10, 10)); // 20

// 2 This function greets a user by name, or greets an anonymous user if no name is provided

const userName = function (name: string = "AnonyMous") {
    //says Hellos to the given name or to an anonymous user
    console.log(`Hello, ${name}!`)
}

userName("Salman"); // outputs: Hello, Salman!
userName(); // outputs: Hello, AnonyMous!