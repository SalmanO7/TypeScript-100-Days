// 1 Demonstrating block scope 
{
    let blockLet = "Visible inside the block";
    const blockConst = "Also inside the block";
    console.log(blockLet) // works fine here
    console.log(blockConst) // Also works fine here
}

try {
    // console.log(blockLet) // this will fail
} catch (error) {
    console.log("'BlockLet' is not accessible outside the block.");
}

try {
    // console.log(blockConst) // this will fail also
} catch (error) {
    console.log("'BlockConst' is not accessible outside the block.");
}

// This shows that 'let' and 'const' keep variables safe inside the block where they're defined.


// 2 This function shows how to assign and update variable values
const updateVariable = () => {
    let number = 10;
    console.log("Initial value: " + number);
    number = 20;
    console.log("Update value: " + number);
}

updateVariable();