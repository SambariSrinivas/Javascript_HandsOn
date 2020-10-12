//Different Types of Operatiors in JavaScript

console.log("Operators in JavaScript");

//Arithmetic Operators
//Assignment Operators
//Ternary
//Comparison
//logical
//Binary


//Arithmetic
console.log("************Arithmetic Operators*************");
let x = 10;
let y = 25;
console.log("sum is = : " + (x + y));
console.log("mul is = : " + (x * y));
console.log("difference is = : " + (x - y));
console.log("division = : " + (x / y));
console.log("modular x % y is = : " + (x % y));
console.log("modular y % x is = : " + (y % x));
console.log("Power of x to y is = :" + (x ** y));
console.log("2 to the power of 3 is = : " + (2 ** 3));

//Pre and Post Increments or decrements.
console.log("************Pre and Post Increments or decrements*************");
let p = 5;
console.log("value of P during the pre increment is : " + (++p));
console.log("apply post increment to P is = :", p++);
console.log("New value of P post increment is : " + p);
console.log("pre decrement of P is : " + (--p));
console.log("Post Decrement of P is : " + (p--));
console.log("New Value of P post decrement is : " + p);

//Assignment Operator:
console.log("************Assignment Operator*************");
let Q = 10;
let c = Q + 5;
console.log(c);
//Q = Q * Q;
Q *= Q
console.log("Value of Q is :" +
    Q);

let j = 5
j += 5;
console.log("Value of J is :" + j);

//Comparison  >, <,>=, <=, ===

console.log("************Comparison  >, <,>=, <=, ===*************");

console.log(j > 15);
console.log(j < 15);

let i = 10;
console.log(i >= 10);
console.log(i <= 10);
console.log(i === 10); /// ==== strict equality, Type and Value will be checked.
console.log("*************strict equality, Type and Value will be checked*******************");
console.log(1 === 1);
console.log('1' === 1);
console.log(true === 1);
console.log("*************************");

console.log("***********loose Equality**************");
//loose Equality..
console.log('1' == 1);
console.log(1 == 1);
console.log(true == 1);


//Ternary Operators
console.log("*********Ternary Operators****************");
let points = 110

let type = points > 100 ? 'Gold' : 'Silver'
console.log(type);


//Logical Operators  AND, OR and NOT
console.log("*********Logical Operators AND (&&), OR(||) and NOT(!)****************");



console.log("*********AND Operator***************");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


let income = 55000
let creditscore = 870

if ((income > 45000) && (creditscore > 800)) {
    console.log("Person is eligible for loan");
} else {
    console.log("Person is not eligible for loan");
}


console.log("*********OR Operator***************");

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


console.log("*********NOT (!)Operator***************");

let isActive = true;

console.log(!isActive);
console.log(!(10 > 5));
console.log(!(10 < 5));


console.log("*********Logical Operators With Non-Boolean Values****************");

let input = false || 'Srinivas'; //Falsey value might be a null value or undefiend value or false or 0 or blank value or Not a Number
//Here Srinivas is not a falsey value or non-falsey value

console.log(input);

console.log(true || null);


//real time example

let usercolor = "RED";
let defaultcolor = "BLUE";
let currentcolor = usercolor || defaultcolor;

console.log("Current Color is : " + currentcolor);


//real time example2

let usercolor1 = undefined;
let defaultcolor1 = "BLUE";
let currentcolor1 = usercolor1 || defaultcolor1;

console.log("Current Color is : " + currentcolor1);


//real time example3

let usercolor3 = "ORANGE";
let defaultcolor3 = null;
let currentcolor3 = usercolor3 || defaultcolor3;

console.log("Current Color is : " + currentcolor3);


//BITWISE Operators

//We dont regularly use BITWISE opertors.

console.log("*************BITWISE OPERATORS***************");

console.log("*************BITWISE AND (&)OPERATOR ***************");
console.log("BitWise AND Result is : " + (1 & 2)); //output is : 0
console.log("BitWise OR Result is : " + (1 | 2)); //output is : 3

//Operator Precedence

console.log(2 + 3 * 4);
console.log((2 + 3) * 4);


//Swapping numbers


let A = 10;
let B = 20;
console.log("The value of A Before Swapping is :" + A);
console.log("The value of B Before Swapping is :" + B);

let C = A;

A = B;
B = C;
console.log("The values of A and B after swapping");

console.log("The value of A After Swapping is :" + A);
console.log("The value of B After Swapping is :" + B);