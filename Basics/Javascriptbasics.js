//data types
let name = 'Srinivas';
let age = 25;
console.log(name + ' age is = ' + age);
const range = 113;
//range = 5
console.log(range);


//DataTypes:

//Type1: Premitive Data Types

//string, number, boolean, undefined, null

//Type2: Reference types

let s1 = 'SambariS';
let num = 32;
let price;
let wheels = undefined;
let noofcards = null;
let isActive = true;
let isPresent = false;

//Dynamic typing 
let d = 'srini';
d = 30;


//Declare an object

let User = {}; //User is an object with undefined

let User2 = {
    name: 'Srinivas',
    age: 32,
};
console.log(User2);

console.log(User2.name);
console.log(User2.age);

User2.age = 30;
console.log(User2.age);

//Using Bracket Notation

User2['name'] = 'Tom';
console.log(User2.name);


//Arrays(Arrays are dynamic, we can store any kind of data including string, number, boolean, etc..)

let Language = ['Java', 'JavaScript'];
console.log(Language.length);

console.log(Language.indexOf('JavaScript'));

Language.push("RUBY");

console.log(Language.length);

console.log(Language.indexOf('RUBY'));
Language[3] = 'Python';

console.log(Language.length);

console.log(typeof(Language));

//Functions:

//Function Definition

function getName() {
    console.log('This is My Function');
}

//Function calling

getName();

//Parameter Based Function
function greetme(name) {
    console.log('Hello ' + name);
}

//Calling Function with Argument.

greetme('Srinivas');



//Retrun from a Function


function addtion(num1, num2) {
    return num1 + num2;
}


//passring arguments to a function and getting a return value

let sum = addtion(23, 25);
console.log('sum of two numbers is : ' + sum);


//Square Root Function

function squareroot(num) {
    return num * num;
}

//Calling square root function

let result = squareroot(4);
console.log('square root of number is : ' + result);