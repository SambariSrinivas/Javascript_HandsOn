//Different Control Flows
//IF
//IF-ELSE
//Switch


//IF Example

console.log("** ** ** ** ** ** * IF - ELSE example ** ** ** ** ** ")
let iceCream = 'Blueberry';
if (iceCream == 'Chocolate') {
    console.log('Wow, I love Chocolate IceCream');
} else if (iceCream == 'Straberry') {
    console.log('I am OKAY with Straberry flavour');
} else {
    console.log("Awww.... I need Chocolate or Straberry flavour");
}

//Find a maximum number

let a = 100;
let b = 800;
let c = 300;

if (a > b && a > c) console.log('a is maximum number : ' + a);
else if (b > c) console.log('b is maximum number : ' + b);
else console.log('c is the maximum number:' + c);


//Switch-Case statements

console.log("** ** ** ** ** ** * Switch - Case example ** ** ** ** ** ")

let user_role = 'admin';
switch (user_role) {
    case 'guest':
        console.log("User logged as Guest User");
        break;
    case 'admin':
        console.log("User logged as Admin User");
        break;
    case 'Dev':
        console.log("User logged as Developer User");
        break;
    case 'Tester':
        console.log("User logged as Tester User");
        break;
    default:
        console.log("User logged as Default Temporary User");
        break;

}