// Pizzas: Think of at least three kinds of your favorite pizza. 
// Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
var pizzas = ["pepperoni", "Margherita", "Hawaiian"];
pizzas.forEach(function (pizza) {
    console.log("I Like ".concat(pizza, " pizza."));
});
console.log("i Really Love pizza!");
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var animals = ["Cat", "Hourse", "Corcodle"];
animals.forEach(function (animal) {
    console.log("A ".concat(animal, " would make a great pet."));
});
console.log("Any of these animals would make great pet");
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call t
var makeShirt = function (size, message) {
    console.log("making a ".concat(size, " t-shirt with the message ").concat(message, " printed on it"));
};
makeShirt("Medium", "Code is Life");
