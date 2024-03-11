//Question
//  Greetings: Use the array from Exercise 11. Instead of just printing each person’s name,print a message
// to them. The message should be the same for each person, but personalized with their name.
let names: string[] = ["Salman", "Faizan", "asif", "Ifthikhar", "Waqas"]
for (const name of names) {
    console.log(`Hey ${name} How Are You`)
}

//Question
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
//  and make a list that stores several examples. Use your list to print a series of statements about these
//   items, such as “I would like to own a Honda motorcycle.”
let vahicals: string[] = ["Honda", "civic", "Bike", "Train", "Airplan"]
vahicals.forEach((vahical) => {
    console.log(`I would like to own a ${vahical}.`);
})

