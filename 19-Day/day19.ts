// A way to make a flixble list

const createObjectWithDynamicKey = (key: string, value: string) => {
    let dynamicObject = {
        theme: "dark"
    }

    // Setting up a section in the list with a changeable name
    return dynamicObject;

}

// using the flexible list setup for a user's preference

let userPreference = createObjectWithDynamicKey("theme", "dark");

// shwoing the user's choice
console.log(userPreference)

