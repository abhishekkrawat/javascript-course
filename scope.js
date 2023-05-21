/*
In JS it doesn't just matter what variables we declare

It also matters where we declare them

Scope determines where variables are "in play"
*/

function declareBankruptcy() {
    let bankruptcy = true;
}
declareBankruptcy();
//console.log(bankruptcy); // this wouldn't log anything to the console because it's not declared
// in the global scope

/*
Scopes are nested within the program
The widest scope is the global scope
Each function gets its own new scope within the scope where it was declared
*/

let planet = "Jupiter";
function scopeOut() {
    let planet = "Mars";
    // console.log("Inner planet:", planet);   // logs: "Inner planet: Mars"
}
scopeOut();
// console.log("Outer planet:", planet);  // logs: "Outer planet: Jupiter"


/*
Within each scope, you can access variables declared in a wider scope (e.g. global scope)
But not those declared in a narrower scope (e.g. function scope)


Variables declared with let/var can be modified from within a narrower scope
This can be useful, but also dangerous!
*/

let feeling = "free";
function trap() {
    feeling = "boxedIn";
}
trap();
// console.log(feeling); // returns boxedIn 