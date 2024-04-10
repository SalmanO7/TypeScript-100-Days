// This Program calculates the average of all scores given

const averageScore = (...scores: number[]) => {
    // Adds all scores together and divides by the number of scores
    let totalScore = scores.reduce((sum, score) => sum + score, 0);
    return totalScore / scores.length
}
// Example: Finding the average of four scores
let scores = [69, 38, 27, 90]
console.log(averageScore(...scores)); // Show the average score
// we add up all scores, then divide by how many there are.


// This Program makes a function that adds a  specific number

const makeAdder = (addValue:number) => {
    // This is the Magix Box. it takes a number and adds your special number to it
    return function (nmbr:number) {
        return nmbr + addValue
    }
}
// Makig Magic box that Adds 5 
let fiveAdd = makeAdder(5);
console.log(fiveAdd(10)) // if we add 10 in the box, it give us 15
//  we made a function (magic box) that adds 5 to any number.