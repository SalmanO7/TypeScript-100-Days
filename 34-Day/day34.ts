// this function creates a random number between 1 and 10

function generateRandomNumber(): number {
    return Math.floor(Math.random() * 10) + 1;
}

//Example: Getting a random number 
console.log(generateRandomNumber());


// 2 Defines an Array with three favorite fruits
let FavoriteFruits: string[] = ["Apple", "Orange", "Banana"]
FavoriteFruits.push("Mango");

// Add 1 more favorite Fruit in this array
console.log(FavoriteFruits)


// 3 this Function Remove  the last element from the array and returns it
function removeLastElement<T>(arr: T[]): T | undefined {
    return arr.pop();
}

//Example Removing the last fruit from the array
const fruits: string[] = ["Apple", "Orange", "Banana"]
console.log(removeLastElement(fruits)); // The OUtput is Banana
console.log(fruits) // The OUtput is ['Apple', 'Orange']
