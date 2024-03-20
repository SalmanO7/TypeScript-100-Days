let userName: string[] = ["admin", "salman", "siddique", "faizan"];
userName.forEach((person) => {
    if (person == "admin") {
        console.log(`Hello ${person}`);
    } else {
        console.log(`Hello ${person}, thank you for logging in again`);
    }
});

