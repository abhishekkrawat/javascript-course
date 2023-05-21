/*
Arrays let us keep multiple values together in a single collection
e.g. synonyms = ["plethora", "array", "cornucopia"]
Arrays can be empty, or hold a single item 
Arrays can hold any type of items, or mix and match!



Just like strings, there are some similar methods for arrays: 

synonyms.length
synonyms[1]
synonyms.indexOf("cornucopia")

synonyms.includes("plethora")
synonyms.includes("variety")



Array methods:
synonyms.pop()
synonyms.push("multitude")
["c", "a", "d", "b"].sort()

["lions", "tigers", "bears oh my!"].join(" & ")
[1, 2, 3].concat([4, 5, 6])




Mutable vs Immutable data
mutable data can be edited (e.g. arrays)
immutable data always stays the same (e.g. strings and other primitives)


push vs concat
push -> mutates an array aka changes the array in-place
concat -> does not mutate the original array, but instead create a new copy


variables themselves can also be (im)mutable
e.g.
let letVariable = "original value";
letVariable = "New Value";

const constVariable = "original value"
constVariable = "New Value" -> WRONG          

immutable variable with mutable value:
const operands = [4, 6];
const sum = operands[0] + operands[1]

operands[0] = 5 -> this will work because the array "operands" is constant but 
the elements inside the array are mutable/changeable.
const newSum = operands[0] + operands[1]



If you have the choice...
Using immutable data & variables is usually best
because immutability is really important in functional programming
*/
let numbers2 = [1, 2, 3];
let result2 = numbers2.concat([4]);
console.log(result2);