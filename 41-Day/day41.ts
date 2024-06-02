// 1# Define an object with a name property and a method to return its name

const person = {
    name: "Salman",
    getName: function () {
        return this.name;
    }
}
console.log(person.getName())
// this method correctly indentifies and returens the object's 'name'

// 2#  An object with multiple properties and a method that interacts with them using 'this'
const rectangle = {
    width: 10,
    height: 20,
    calculateArea: function () {
        return this.width * this.height;
    }
}
console.log(rectangle.calculateArea())
// the 'calculateArea' method uses 'this' to compute the area based on the object's width and height

// Demonstrates 'this' behavior change in a nested function
const myObj = {
    property: "value",
    outerMethod: function () {
        console.log(this.property);

        const innerMethod = () => {
            console.log(this.property);
            console.log("Salman")
        }

        innerMethod();
    }
};
myObj.outerMethod();








