/*
values are things
variable points to things
functions do things

*/

function half(x) {
    return x / 2;
};

const one = half(2);
// console.log(one);



/*
Parameters & Arguments
parameters -> inputs a function expects
arguments -> actual values the function is called with
*/

function add(x, y) {  // x and y are the parameters
    return x + y;
};

console.log(add(2, 3)); // 2 and 3 are the arguements that are passed through the function




// Some functions don't need any parameters/values

function getrandomnumber() {
    return Math.random(); // returns a random value between the range of 0 and 1
};

// console.log(getrandomnumber())




/*
Parameters should be named like variables, and behave like variables within the function body

function doesThisWork("literally a value") {
    return true;
};
This would not work because JS is looking for a vairable



function doesThisWork(x="literally a value") {
    return true;
};
This would work because the parameter is now a variable
*/



