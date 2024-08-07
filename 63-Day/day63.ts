// TYPE ANNOTATION

let myNumberExOne: number = 24;
let mySTringExOne: string = "Hellow, Typescript"

console.log("My Number is :", myNumberExOne)
console.log("My String is :", mySTringExOne)

// Another way to write this code is as follows:

let myNumberExTwo: number;
let mySTringExTwo: string;

myNumberExTwo = 50;
mySTringExTwo = "Hellow World"

console.log("My Number is :", myNumberExTwo)
console.log("My String is :", mySTringExTwo)

// DYNAMIC TYPE DETERMINATION

let greeting = "Hello World";
console.log(greeting)

// ANY TYPE

let myVariable: any = 19;
myVariable = "Hello World";
console.log(myVariable)
