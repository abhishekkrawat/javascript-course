/*
if statements let us execute code under a certain condition


code in the if block only runs if the (condition) is true
*/



// TASK 1 

/*
firstname = "Abhishek";
lastname = "Rawat";

if (firstname.length > lastname.length) {
    console.log("The first name is longer");
} else {
    console.log("The second name is longer");
};

*/


// TASK 2

// function isEmpty (array) {
//     if (array.length === 0) {
//         console.log("The array is empty");
//     } else {
//         console.log("The array is not empty");
//     };
// };

// isEmpty([])


/*
Boolean (logical) operators

The ! operator negates a boolean (gives its opposite)
*/
let someoneIsAroundYou = false; 
if (!someoneIsAroundYou) {
    console.log("baby I love you");
}


/*
LOGICAL OPERATORS 
Logical operators let us make two boolean values become one

Logical "and" (&&) requires both values to be truthy
A	    B	    A && B
true	true	true
true	false	false
false	true	false
false	false	false


Logical "or" (||) requires only one value to be truthy
A	    B	    A || B
true	true	true
true	false	true
false	true	true
false	false	false

*/ 


/* 
Conditional ternary operator

JS also has a "shortcut" operator for writing quick conditionals
it needs 3 values to work:
condition ? valueIfTrue : valueIfFalse;


let mood = forecast === "sunny" ? "happy" : "sad";

//              IS EQUIVALENT TO 

let mood;
if (forecast === "sunny") {
    mood = "happy";
} else {
    mood = "sad";
}
*/