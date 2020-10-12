//Loops in JavaScript
//While, do while, for, for-in, for-off, infinite loops

console.log("** ** ** ** ** ** * Learning Loops in JavaScript ** ** ** ** ** ** ** ** ");

console.log("** ** ** ** ** ** * For Loop in JavaScript ** ** ** ** ** ** ** ** ");

let i = 0;
for (i; i < 10; i++) {
    console.log("Value of I is : " + i);
}

console.log("** ** ** ** ** ** * Print Even Numbers Using For Loop in JavaScript ** ** ** ** ** ** ** ** ");
let j = 0;
for (j; j <= 10; j++) {
    if (j % 2 === 0)
        console.log(j);
}

//While Loop

console.log("** ** ** ** ** ** * While Loop in JavaScript ** ** ** ** ** ** ** ** ");

let k = 0;
while (k <= 10) {
    console.log('Value of K is : ' + k);
    k++;
}

console.log("** ** ** ** ** ** * Print ODD Numbers Using While Loop in JavaScript ** ** ** ** ** ** ** ** ");

let l = 0;
while (l <= 10) {
    if (l % 2 != 0)
        console.log(l);
    l++;
}


console.log("** ** ** ** ** ** * DO-While Loop in JavaScript ** ** ** ** ** ** ** ** ");

let m = 0;
do {
    console.log('Value of m is : ' + m);
    m++;
}
while (m <= 10)

//For-in loop to get the key and  vlaues of an object
console.log("** ** ** ** ** ** * For-in Loop in JavaScript ** ** ** ** ** ** ** ** ");

const person = {
    name: 'srinivas',
    age: 25
}
for (let i in person) {
    console.log(i, person[i]);
}
//for-of loop to get the values from an array
console.log("** ** ** ** ** ** * For-OF Loop in JavaScript ** ** ** ** ** ** ** ** ");
const colours = ["RED", "GREEN", "BLUE"];
for (let i of colours) {
    console.log("Colour is : " + i);
}


//Break and Continue Statements