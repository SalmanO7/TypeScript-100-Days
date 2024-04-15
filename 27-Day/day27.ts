// 1 this function swaps the values of two variables

function swapsValues() {
    let a = 10; // Initial, a is 10 and b is 5
    let b = 5;
    console.log("Before swap: a = " + a + " b = " + b);

    let temp = a; // Temporary stores the value of a
    a = b; //sets a to b's value
    b = temp; // Sets b to a's orignal value stored in temp
    console.log("After swap: a = " + a + " b = " + b);
}

swapsValues(); // swaps the values of two variables

console.log("\n")

// 2 This function uses compound assigment operators for different operations
const useCompoundOperators = function () {
    let x = 4; // Starts with x equal to 4
    console.log("intial value: " + x);

    x += 2; // Adds 2 to x
    console.log("After Addition: " + x)

    x -= 2; // Subtracts 2 to x
    console.log("After Subtraction: " + x)

    x *= 2; // Multiply 2 to x
    console.log("After Multiplication: " + x)

    x /= 2; // divide 2 to x
    console.log("After Division: " + x)
}

useCompoundOperators();
// We simply airthmetic operation on x using compound Assigment operators,

