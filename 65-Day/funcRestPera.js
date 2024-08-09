"use strict";
//  ****Function Rest Parameter****
// Function with a rest parameter and type annotations
function addAll(...nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}
// Calling the function with various numeric arguments
console.log(addAll(10, 20, 30, 100, 10.5, +true)); // Output: 170.5
// In this code:
// - The `addAll` function is defined with a rest parameter `...nums`, which captures a variable number of numeric arguments and stores them in an array named `nums`. The type annotation `number[]` specifies that the elements in the `nums` array should be of type `number`.
// - Inside the function, a `for` loop is used to iterate through the `nums` array and calculate the sum of all the numbers provided as arguments.
// pro tip
// **`+true`** in JavaScript is a unary plus operator (**`+`**) applied to the boolean **`true`**, resulting in the numeric value **`1`**.
