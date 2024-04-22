// 1 Function Declaration for squaring a number

function squarDeclaration(nmbr: number) {
    return nmbr * nmbr;
}
console.log(squarDeclaration(5)); 

// 2 Function Experassion for squaring a number
const squarExpression = function (nmbr: number) {
    return nmbr * nmbr
}
console.log(squarExpression(10));

// 3 Function Arrows for squaring a number
const squarArrow = (nmbr:number) => {
    return nmbr * nmbr
}
console.log(squarArrow(15));

