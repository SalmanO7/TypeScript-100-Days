var userName = ["admin", "salman", "siddique", "faizan"];
userName.forEach(function (person) {
    if (person == "admin") {
        console.log("Hello ".concat(person));
    }
    else {
        console.log("Hello ".concat(person, ", thank you for logging in again"));
    }
});
