// This Program calculates the average of all scores given
var averageScore = function () {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    // Adds all scores together and divides by the number of scores
    var totalScore = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return totalScore / scores.length;
};
// Example: Finding the average of four scores
var scores = [69, 38, 27, 90];
console.log(averageScore.apply(void 0, scores)); // Show the average score
// we add up all scores, then divide by how many there are.
// This Program makes a function that adds a  specific number
var makeAdder = function (addValue) {
    // This is the Magix Box. it takes a number and adds your special number to it
    return function (nmbr) {
        return nmbr + addValue;
    };
};
// Makig Magic box that Adds 5 
var fiveAdd = makeAdder(5);
console.log(fiveAdd(10)); // if we add 10 in the box, it give us 15
//  we made a function (magic box) that adds 5 to any number.
