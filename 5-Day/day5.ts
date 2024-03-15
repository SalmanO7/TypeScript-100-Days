let guests: string[] = ["Tom Cruise", "Pedro Alonso", "Hanry Cavil"];

// console.log("Great news! I found a bigger dinner table!");

//Adding More Guests for Dinner Table
// guests.unshift("Isaac Newton");
// guests.splice(guests.length / 2, 0, "Alberto Enstine")
// guests.push("Cristiano Ronaldo")

// guests.forEach((guest) => {
//     console.log(`Dear ${guest} would You Like to join me for dinner?`);
// })


//Removing Guests from dinner Table
// console.log("Unfortunately, i can only invite two people ofr dinner.");
// while (guests.length > 2) {
//     let removeGuest = guests.pop();
//     console.log(`Soory ${removeGuest}, I can't invite you to dinner.`);
// }

//Now The Remain Guests Still Invited
guests.forEach(guest => {
    console.log(`Dear ${guest}, You're still invited to dinner.`)
})

// Now the Guests List Is Empty
guests.splice(0, guests.length);
console.log(guests)