//Question
//  Greetings: Use the array from Exercise 11. Instead of just printing each person’s name,print a message
// to them. The message should be the same for each person, but personalized with their name.
var names = ["Salman", "Faizan", "asif", "Ifthikhar", "Waqas"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Hey ".concat(name_1, " How Are You"));
}
//Question
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
//  and make a list that stores several examples. Use your list to print a series of statements about these
//   items, such as “I would like to own a Honda motorcycle.”
var vahicals = ["Honda", "civic", "Bike", "Train", "Airplan"];
vahicals.forEach(function (vahical) {
    console.log("I would like to own a ".concat(vahical, "."));
});
