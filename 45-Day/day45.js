// Defines a javascript objects
var detail = {
    name: "salman",
    age: 18,
    city: "karachi"
};
// convert the object into a JSON string
var json_String = JSON.stringify(detail);
console.log(json_String);
// Demonstrates converting an object it easy to store or transmit.
// 2 Defines a JSON String
var jsonString = '{"name":"salman","age":"18","city":"karachi"}';
// parses the JSON string back into a javascript object
var person = JSON.parse(jsonString);
console.log(person);
// this snippet  shows how to take a JSON string and convert it back into a javascript object.
// 3 Reusing the person
var Another_Person = {
    name: "Salman",
    age: 15,
    city: "karachi",
};
// Converts the object into a JSON string with indentation
var Json_String = JSON.stringify(Another_Person, null, 3);
console.log(Json_String);
