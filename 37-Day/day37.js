// #1 This function returns a random boolean value
function randomBoolean() {
    return Math.random() > 0.5;
}
console.log(randomBoolean());
// #2 This function generates a random hexadecimal color number
var getRandomHexaColor = function () {
    var color = "#" + Math.floor(Math.random() * 0xfffff).toString(10);
    return color;
};
console.log(getRandomHexaColor());
// #3 This function simulates rolling a dice and returns a number b/w 1 and 6
var rollDice = function () {
    return Math.floor(Math.random() * 6) + 1;
};
console.log(rollDice());
