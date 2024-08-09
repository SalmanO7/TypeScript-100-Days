"use strict";
// Optional And Default Parameter*
// In TypeScript, you can make function parameters optional or provide default values to parameters, allowing for more flexible and convenient function usage. This feature is especially useful when you have functions that can accept a varying number of arguments or when you want to provide default values in case the caller does not supply a particular argument.
// Let's break down optional and default parameters:
// 1. **Optional Parameters:**
//     - An optional parameter is one that may or may not be provided when calling a function.
//     - To define an optional parameter, you use a `?` symbol after the parameter name in the function's parameter list.
//     - The TypeScript compiler allows you to call the function with or without providing a value for the optional parameter.
//     Example:
function greetOptional(name, age) {
    if (age !== undefined) {
        console.log(`Hello, ${name}! You are ${age} years old.`);
    }
    else {
        console.log(`Hello, ${name}!`);
    }
}
greetOptional("Alice"); // Output: "Hello, Alice!"
greetOptional("Bob", 30); // Output: "Hello, Bob! You are 30 years old."
// 2. **Default Parameters:**
//     - A default parameter is a parameter that automatically takes a default value if no argument is provided during the function call.
//     - To set a default value for a parameter, you use the `=` operator in the parameter list.
// Example:
// Default Parameters:
function greetDefault(name, age = 25) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
greetDefault("Alice"); // Output: "Hello, Alice! You are 25 years old."
greetDefault("Bob", 30); // Output: "Hello, Bob! You are 30 years old."
