// Seeing the world : think of at least five places you'd like to visit.

let places: string[] = ["New Zealand", "Iceland", "Japan", "Switzrland", "Norway"];

console.log("Orignal Order: ", places);

console.log("Alphabet Order:", [...places].sort());
console.log("Revers Alphabetical Order:", [...places].sort().reverse());

console.log("Orignal orders:", places)

places.reverse();
console.log("Reversed order:", places)

places.sort();
console.log("Alphabetical Order:", places)

places.reverse();
console.log("Reversed Alphabetical order:", places)
// console.log("places Sort:",)