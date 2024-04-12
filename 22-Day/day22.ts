// Creating a blueprint (interface) for student information
interface Student {
    name: string;
    age: number;
    courses: string[];
}

// Filling in the blueprint with an example student information
let student: Student = {
    name: 'Salman',
    age: 18,
    courses: ["Math", "English", "Urdu", "Physics"]
}

// Showing the student's information
console.log(student);
// we're using the blueprint to make sure our student has a name, age, and list of courses.

//Creating a custom type (type list) for shapes that could be circles or rectangles
type Shape = {
    kind: 'Circle' | 'Rectangle';
    radius: number;
    width: number;
    height: number;
};

//Descring a circles using our shapes type
let rectangle: Shape = {
    kind: 'Circle',
    width: 10,
    radius: 20,
    height:20,
};

//Showing what we described
console.log(rectangle)
// we made a flexible program that can decribe different shapes in details.