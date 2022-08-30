// Comparison operators

// = is the assignment operator, not a comparitive operator

console.log("poop");

// == compares values and reverts strings contain just numbers to nubmers
// === STRICLYthe same data type and value (use this!)
// != not equal to
// !== STRICTLY not equal to (use this!)
// > great than
// < less than
// >= equal to or greater than
// <= eqia; to or less than

console.log(2 == 2); //is a boolean output (true)
console.log(2 == "2"); // is a boolean output (true) because JS converts the string to a number
console.log(2 === "2"); // is a boolean output (false) because ==== only returns true when both data are stricly same data type and value
console.log(2 != 2); // is a boolean output (false) because the data are same value
console.log(2 !== "2"); // is a boolean output (true) because the data are different types even though same value
console.log(5 > 7);
console.log(5 < 7);
console.log(10>=10);
console.log(11<=10);

console.log(10 == 10);
console.log(10 == "10");
console.log(10 != 4);

console.log(1 == 1); // true - the number 1 does equal the number 1
console.log(12 != 13); // true - the number 12 is not equal to th number 13
console.log(43 !== "43"); //true-  the string and number are the same value but not same type
console.log(15 > 9); // true - the number 15 is greater than  the number 9
console.log(0 > 1); // false - the number 0 is not greater than the number 1
console.log("120" == 121); //false - the string and number are not the same value
console.log("10" === "10"); // true - these data are the same type and value

// Conditionals

// if
// else
// else if

const classStartTime = 0900;
let arrivalTime;

function amILateForClass() {
  arrivalTime = document.getElementById("arrive");
  if (arrivalTime > classStartTime) {
    alert("Late!");
  } else if (arrivalTime === classStartTime) {
    alert("On time");
  } else {
    alert("You are early");
  }
}


console.log(amILateForClass());

let myNumber = 0.1

if (myNumber > 0) {
    console.log("This number is positive");
}
    else if (myNumber === 0) {
        console.log("This number is zero");
    }
    else {
        console.log("This number is negative");
    }

let myString = "1 apple"

if (myString.startsWith("a")) {
    console.log("this string starts with a")
}
else {
    console.log("This string does not start with a")
}

if (myString[0] === "a") {
    console.log("bingo!");
}
else {
    console.log("skux");
}

// tenary operator

const word = "hippopotamus";

word.length > 10
  ? console.log("the word is long")
  : console.log("the word is NOT long");

// This is the same as writing:

if (word.length > 10) {
  console.log("The word is long");
} else {
  console.log("The word is NOT long");
}

// if there are two possible outcomes, use ternary, otherwise use traditional

let possibleOutcomes = 2;

possibleOutcomes > 2
  ? console.log("use traditional")
  : console.log("use teneray");

word[0] === "h"
  ? console.log("this word might be hippopotamus")
  : console.log("this word is definitely not hippopotamus");

// AND/&&

if (word.length > 10 && word.length < 15) {
  console.log("The word is long");
} else if (word.length > 15) {
  console.log("The word is REALLY long");
} else {
  console.log("This word is short");
}

// OR/||

if (word.length === 0 || word.length > 14) {
  console.log("the string is empty or it is greater than 14 characters");
}

// switches

let baldness = 'bald';

switch (baldness) {
  case 'thin':
    console.log("your hair is thinning");
    break;
  case 'balding':
    console.log("you are visibly balding");
    break;
  case 'bald':
    console.log("you are fully bald");
    break;
  default:
    console.log("you are not bald");
}
