// Defines a javascript objects

const detail = {
    name: "salman",
    age: 18,
    city: "karachi"
}

// convert the object into a JSON string
const json_String = JSON.stringify(detail)

console.log(json_String)
// Demonstrates converting an object it easy to store or transmit.

// 2 Defines a JSON String
const jsonString = '{"name":"salman","age":"18","city":"karachi"}';

// parses the JSON string back into a javascript object
const person = JSON.parse(jsonString);

console.log(person)
// this snippet  shows how to take a JSON string and convert it back into a javascript object.

// 3 Reusing the person

const Another_Person = {
    name: "Salman",
    age: 15,
    city: "karachi",
}

// Converts the object into a JSON string with indentation
const Json_String = JSON.stringify(Another_Person, null, 3);

console.log(Json_String);
