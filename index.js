/*******************************************
    Iteration 1 | Find index of a character
*******************************************/
// Write code that prints out to the console the index of the character “j” in

const string1 = "My favorite dessert is jello";

// Your code here...
let idx = string1.indexOf('j');

console.log('Char j is at ', idx);


/*******************************************
    Iteration 2 | Concatenate Characters
*******************************************/
// Make a new string with the text "COOL" by using only the characters available in the provided string and the bracket notation

const string2 = "ABCDEFGHJKLO";

// Your code here...
let len = string2.length; 
let coolStr = string2[2] + string2[len-1] + string2[len-1] +  string2[len-2]

console.log('Cool String: ', coolStr);

/*****************************************************
    Iteration 3 | Repeat a String and Concatenate
*****************************************************/
// Using the method .repeat() and the provided string, print out the text "NaNaNaNa Batman!" in the console.

const string3 = "Na";

// Your code here...
let newStr = string3.repeat(4) + "Batman!"

console.log('New String: ', newStr);

/*******************************************
       Iteration 4 | Fruite Slice
*******************************************/
// Using the string method .slice(), access and print to the console the name of your favorite fruit from a given string

const fruit = "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";

// Your code here...
let favFruit    = "pineapple";
let favLen      = favFruit.length;
let idxFruit     = fruit.indexOf(favFruit);

let accessFruit = fruit.slice(idxFruit, idxFruit + favLen);

console.log('My Favorite Fruit: ', accessFruit);

/***************************************************
    Iteration 5 | Check If Strings Include a Word
***************************************************/
// Using the string method .include(), check if the below strings with funny newspaper headlines include the word "oxygen".
// If a string includes the word "oxygen" print to the console message "The string includes the word 'oxygen'",
// else print the message "The string does not include the word 'oxygen'".

const funnyHeadline1 = "Breathing oxygen linked to staying alive";
const funnyHeadline2 = "Students Cook & Serve Grandparents";


// Check the first headline
// Your code here ...
let headLine1Chk = funnyHeadline1.includes('oxygen');

if (headLine1Chk) {
    console.log("The string includes the word 'oxygen'");
}
else{
    console.log("The string does not include the word 'oxygen'");
}

// Check the second headline
// Your code here ...

let headLine2Chk = funnyHeadline2.includes('oxygen');

if (headLine2Chk) {
    console.log("The string includes the word 'oxygen'");
}
else{
    console.log("The string does not include the word 'oxygen'");
}

/*******************************************
       Iteration 6 | String Length
*******************************************/
// Using console.log() print to the console the length of the string and the last character in the string.

const string4 = "zEAWrTC9EgtxmK9w1";


// a) Print the string length
// Your code here ...
let lenStr = string4.length;
console.log("Length of String ", lenStr);

// b) Print the last character in the string
// Your code here ...
let lastChar = string4[lenStr - 1];
console.log("Last Char of the String ", lastChar);