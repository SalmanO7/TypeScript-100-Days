//43. Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicians = ["Salman", "Faizan", "Asif"]

function ShowMagicians(magicians: string[]) {
    magicians.forEach(magician => console.log(magician))
}
ShowMagicians(magicians)

function makeGreatMagicians(magicians: string[]) {
    return magicians.map(magician => `The Great ${magician}`)
}
makeGreatMagicians(magicians)

let modifiedMagicians: string[] = makeGreatMagicians(magicians.slice())
console.log("Orignal Magicians")
ShowMagicians(magicians)
console.log("\n Modified Magcians \n")
ShowMagicians(modifiedMagicians)
