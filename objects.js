const js = {
    name: "JavaScript",
    abbreviation: "JS",
    isAwesome: true,
    officialSpec: "ECMAScript",
    birthYear: 1995,
    creator: "Brendan Eich"
};

/*
Objects collect multiple values together to describle more complex data
*/

const indecisive = {  // indecisive (reference) points to an object
    lunch: "sandwich" // the lunch (pointer) points to the string value "sandwich"
};

indecisive.lunch = "tacos";
indecisive.snack = "chips";

// therefore, objects are mutable


// console.log(indecisive.lunch)
// console.log(indecisive["lunch"]) 




// task

const abhishek = {
    name: "Abhishek",
    age: 17,
    home: "London",
    languages: ["English", "Hindi"],
    pet: null,
    vehicle: null,
    hobbies: ["football", "music", "maths", "gaming "]
}