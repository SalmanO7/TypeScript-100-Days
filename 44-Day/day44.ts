// REserved word: let - used to declare a block-scoped local variable.
let count = 5;

// Reserved word: if - used to execute a block of code of a specified condition is ture
if (count > 0) {
    console.log("Count is greter than 0")
}

// Reserved word: return - used to exit a function and return a value from that function
function add(a: number, b: number) {
    return a + b;
}
// Demonstrates valid use cases for the reserved words 'let' , 'if' and 'return'.

// 2 Attempting to use a reserved word as a variable name;

// let if = 5; // This line is syntax error coz if is a resvered keyword
console.log(
    "Using a reserved word as a variable name causes a syntax error in javascript where"
)

//3 Example use of the 'await' reserved word in asynchronous javascript
async function fetchData() {
    // const data = await fetchSomething();   // Error in this line it's syntex error  
    // console.log(data)
    //The 'await' keyword pauses the escution untill the promise settles, and then resume with resolved value.
}
console.log(
    "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
)
