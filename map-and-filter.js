// map calls a function on each item in an array to create a new array

const spices = [
    {name: "Emma", nickname: "Baby"},
    {name: "Geri", nickname: "Ginger"},
    {name: "Mel B", nickname: "Scary"},
    {name: "Mel C", nickname: "Sporty"},
    {name: "Victoria", nickname: "Posh"}
];
const nicknames = spices.map(s => s.nickname + " Spice");
console.log(nicknames);



// filter calls a true/false function on each item

// and creates a new array with only the items where the function returns true

const mels = spices.filter(s => s.name.includes("Mel"));


// TASK 1
const names = spices.map(spiceName => spiceName.name);

// TASK 2
const endInY = spices.filter(spiceName => spiceName.nickname.endsWith("y"));

// const skills = ["HTML", "CSS", "JS"];

// function addStrings (x, y) {
//     console.log(x + y);
// };

// addStrings(...skills)
