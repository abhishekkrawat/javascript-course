// FOR LOOPS


// Loops let us run the same chunk of code multiple times 

// This is called iteration

for (let rep = 0; rep < 10; rep += 1) {
    console.log("now doing rep", rep);
}
console.log("do you even lift bro");


/*
For loops require us to : 
1. declare and initaliaze a loop counter
2. give a condition for the loop to keep running 
3. describe how to change (usually increment)the counter each time  
*/

for (let count = 0; count <= 100; count += 10) {
    console.log(count);
}


// for ... of loops let us more easily iterate over items in a collection

const numbers = [1,2,3];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
for (let n of numbers) {
    console.log(n);
}


// we can also use for...of to iterate over characters in a string 
for (let char of "ALOHA") {
    console.log(char);
}
// or items in an array 
for (let item of ["pop", 6, "squish"]) {
    console.log(typeof item);
}
// because strings and arrays are "iterables"




// WHILE LOOPS

// while loops let us run a chunk of code over & over if a (condition) is true
let fiveRandomNumbers = [];
while (fiveRandomNumbers.length < 5) {
    fiveRandomNumbers.push(Math.random());
}
// console.log(fiveRandomNumbers)

const BREEDS = ["affenpinscher", "african", "airedale", "akita", "appenzeller", "shepherd australian", "basenji", "beagle", "bluetick", "borzoi", "bouvier", "boxer", "brabancon", "briard", "norwegian buhund", "boston bulldog", "english bulldog", "french bulldog", "staffordshire bullterrier", "australian cattledog", "chihuahua", "chow", "clumber", "cockapoo", "border collie", "coonhound", "cardigan corgi", "cotondetulear", "dachshund", "dalmatian", "great dane", "scottish deerhound", "dhole", "dingo", "doberman", "norwegian elkhound", "entlebucher", "eskimo", "lapphund finnish", "bichon frise", "germanshepherd", "italian greyhound", "groenendael", "havanese", "afghan hound", "basset hound", "blood hound", "english hound", "ibizan hound", "plott hound", "walker hound", "husky", "keeshond", "kelpie", "komondor", "kuvasz", "labradoodle", "labrador", "leonberg", "lhasa", "malamute", "malinois", "maltese", "bull mastiff", "english mastiff", "tibetan mastiff", "mexicanhairless", "mix", "bernese mountain", "swiss mountain", "newfoundland", "otterhound", "caucasian ovcharka", "papillon", "pekinese", "pembroke", "miniature pinscher", "pitbull", "german pointer", "germanlonghair pointer", "pomeranian", "medium poodle", "miniature poodle", "standard poodle", "toy poodle", "pug", "puggle", "pyrenees", "redbone", "chesapeake retriever", "curly retriever", "flatcoated retriever", "golden retriever", "rhodesian ridgeback", "rottweiler", "saluki", "samoyed", "schipperke", "giant schnauzer", "miniature schnauzer", "english setter", "gordon setter", "irish setter", "sharpei", "english sheepdog", "shetland sheepdog", "shiba", "shihtzu", "blenheim spaniel", "brittany spaniel", "cocker spaniel", "irish spaniel", "japanese spaniel", "sussex spaniel", "welsh spaniel", "english springer", "stbernard", "american terrier", "australian terrier", "bedlington terrier", "border terrier", "cairn terrier", "dandie terrier", "fox terrier", "irish terrier", "kerryblue terrier", "lakeland terrier", "norfolk terrier", "norwich terrier", "patterdale terrier", "russell terrier", "scottish terrier", "sealyham terrier", "silky terrier", "tibetan terrier", "toy terrier", "welsh terrier", "westhighland terrier", "wheaten terrier", "yorkshire terrier", "tervuren", "vizsla", "spanish waterdog", "weimaraner", "whippet", "irish wolfhound"];


function getRandomElement(array) {
    const i = Math.floor(Math.random() * array.length);
    return array[i];
}

function getMultipleChoices(n, correctAnswer, array) {
    let optionsList = []; 
    optionsList.push(correctAnswer);
    while (optionsList.length < n) {
        optionsList.push(getRandomElement(array));
    }
    console.log(optionsList);
}

getMultipleChoices(3, "brown dog", BREEDS);
