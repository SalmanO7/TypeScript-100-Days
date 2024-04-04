// sets up details about a smartphone 

let smartphone = {
  make: "Iphone",
  model: "13 Pro Mex",
  spaces: {
    storage: "256GB",
    screenSize: "5.2 inches",
    batteryLife: "4 hours"
  }
}

// show what we've set up about the smartphone
console.log(smartphone)

// A list a programmer's skills in detail

let developerSkills = {
  language: ["Javascript", "Typescript", "Python"],
  framework: ["React", "Next", "Angular", "Vue"],
  tools: ["Git", "Webpack", "Docker"],
};

// getting Specific skills from the list
let { language, framework, tools } = developerSkills

// showing skills from each categary

console.log(`Language: ${language[0]}, Framework: ${framework[0]} Tools: ${tools[0]}`);
