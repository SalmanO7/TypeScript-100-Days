// 1 This function swaps "JavaScript" with "TypeScript" in a sentance
function replaceJavaScriptWithTypeScript(sentance: string) {
    return sentance.replace(/JavaScript/g, "TypeScript");
    // Uses a regular expression with 'g' flag for a global replacement
}

//Example: Changing a programing language nam in a sentance
console.log(replaceJavaScriptWithTypeScript("I Love JavaScript and JavaScript is Awsome!"));


// 2 This function finds where 'code' first shows up in a text
const findCodePosition = function (str: string) {
    return str.indexOf("code") // looks for "code" and tells where it
}

//Example: Searching withina sentence
console.log(findCodePosition("Learn to code with javaScript"));


// 3 This function checks if a sentence has "javascript" in it
function isJavaScript(str: string): boolean {
    return str.includes("javascript");
}

//Example: Seeing if a text mentions javascript 
console.log(isJavaScript("i Love coding in javaScript"));

