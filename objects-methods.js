/*
Methods: 
We can function properties "methonds" on objects


"this" In a method lets us reference other properties on the object 
 */

const dog = {
    name: "Ein",
    breed: "Corgi",
    // speak: function () {
    //     console.log("woof woof");
}


dog.speak = function () {
    console.log("Hi my name is,", this.name) // "this" -> refers to the properties of the object
}

// dog.speak()





// Nested Objects

const menu = {
    lunch: {
        appetizer: "salad",
        main: "spaghetti",
        dessert: "tiramisu"
    },
    dinner: {
        appetizer: "samosa",
        main: "saag paneer",
        dessert: "gulab jamun"
    }
};
const tiramisu = menu.lunch.dessert;


// Objects in Arrays & Objects

const spices = [
    {name: "Emma", nickname: "Baby"},
    {name: "Geri", nickname: "Ginger"},
    {name: "Mel B", nickname: "Scary"},
    {name: "Mel C", nickname: "Sporty"},
    {name: "Victoria", nickname: "Posh"}
];
const spiceGirls = {
    albums: ["Spice", "Spiceworld", "Forever"],
    motto: "Girl Power",
    members: spices
};


// console.log(spiceGirls.members)




// Task

// console.log(spiceGirls.motto);
// console.log(spiceGirls.members[1]);
// console.log(spiceGirls.albums[1])
// console.log(spiceGirls.members[4].name)






/*
Built-in Objects
eg. 'document' -> ".querySelector", ".GetElementById", ".title"
document.title = "Tic Tac Toe";
document.querySelector("h2").append(" and love");                


eg.console -> ".log", ".warn", ".error", ".clear
console.log("hello coder!");
console.log(document.querySelector("h1").textContent);
console.warn("something seems iffy");
console.error("oh no, it broke!");
console.clear();


eg. Math -> ".random()", ".PI", ".abs(-5)"
let randomNumber = Math.random();
const pi = Math.PI;
const five = Math.abs(-5);
*/



/*
Strings are primitive values but JS automatically wraps them as String objects

*/

console.log(Math.abs(-5.6))