// traditional function expression

let add = function (x: number, y: number): number {
    return x + y;
}
// convert In Arrow Function
let add2 = (x: number, y: number): number => {
    return x + y;
}
console.log(add(1, 2));
console.log(add2(1, 2));

// 2# Arrow function that calculates the product of all its perameters
const multiplyPerameters = (...numbers: number[]) => {
    numbers.reduce((total, number) => total * number, 1)
}
console.log(multiplyPerameters(3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14));
// this arrow function sum there arrays numbers

// 3# Demonstrating 'this' in traditional vs. arrow functions

const traditional = {
    value: "traditionalVsArrow Value",
    traditionalFunction: function () {
        console.log("Traditional Function :", this.value);
        const arrowFunction = () => {
            console.log("Arrow Function :", this.value);
        }
        arrowFunction();
    },
}

traditional.traditionalFunction();