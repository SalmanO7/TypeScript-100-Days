// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
//  Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

const makeShirt = (size: string = "large", massage: string = "I love Typescript") => {
    console.log(`Making a ${size} T-shirt with the message ${massage} printed on it`);
}
makeShirt();
makeShirt("Medium");
makeShirt("small", "Dive into coding");


//Cities: Write a function called describe_city() that accepts the name of a city and its country.
//The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value.
//Call your function for three different cities, at least one of which is not in the default country.
// and Using Return 
const describeCity = (city: string, country: string = "England") => {
    console.log(`${city} is in ${country}`);
    return `${city},is in ${country}`
}
describeCity("Karachi");
describeCity("Lahore");
describeCity("Islamabad", "Pakistan");
let returnCityCountry = describeCity("Islamabad", "Pakistan");
console.log(returnCityCountry)





