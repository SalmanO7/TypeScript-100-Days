// 1 this function shows every detail about an object
var logObjectProperties = function (obj) {
    for (var property in obj) {
        console.log("".concat(property, ": ").concat(obj[property]));
        // Shows the property name it's value
    }
};
// using the function with a car object
logObjectProperties({
    make: "Toyota",
    model: "Corolla",
    year: "2009",
    color: "Black",
});
// it tells us each piece of information stored the car
// 2 This function counts how many charactors are in a string
var StringLength = function (str) {
    return str.length;
};
// Example: measuring the length of a name 
console.log(StringLength("Muhmmad Salman"));
// 3 This function changes string to upperCase and then to lowerCase
console.log('\n ');
var convertCase = function (str2) {
    var upperStr = str2.toUpperCase();
    var lowerStr = str2.toLowerCase();
    return "UpperCse: ".concat(upperStr, ", LowerCse: ").concat(lowerStr);
};
// Example: chainging the case of "Hellow World"
console.log(convertCase("Hello World!"));
