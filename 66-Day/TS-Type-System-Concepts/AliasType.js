"use strict";
// Type Alias
Object.defineProperty(exports, "__esModule", { value: true });
// Use the type alias for string
let myName = "Glitcher";
// Use the type alias for the union type
let myValue = 10;
const alice = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
};
const bob = {
    name: "Bob",
    age: 25,
};
console.log(alice);
console.log(bob);
const alice1 = {
    name: "Alice",
    age: 30,
    email: "alice@example.com",
};
const bob1 = {
    name: "Bob",
    age: 25,
};
console.log(alice1);
console.log(bob1);
// In this example, we define a type alias `Employee` for an object with three properties: `name` (a required string), `age` (a required number), and `email` (an optional string).
// We then create two objects, `alice` and `bob`, using this `Employee` type alias. `alice` includes all three properties, while `bob` omits the optional `email` property.
// Type aliases provide a convenient way to define complex object structures with specified types and reuse them throughout your code, improving code readability and maintainability.
