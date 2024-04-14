// 1 Thi function prints numbers from 1 to 5 using loop
function prindNumbers() {
    for (var i = 1; i <= 5; i++) {
        // Uses let for loop variable i
        console.log(i);
    }
    // i is not accessible here, outside the loop, becuase it's defined with let
}
prindNumbers();
// 2 using `let` for a variable that can be reassigned
var age = 18;
age = 19; // wroks fine becasue `let` allwed reassignments 
console.log(age);
//Trying `const` for declare variable
var myName = 'Salman';
try {
    myName = "faizan";
}
catch (error) {
    console.log("Error: can't reassign a \"const-declared\" variable");
}
