//Factory Function in JavaScript

//FactoryFunction will  produce multiple objects of sametype with different key values.

//Naming Convention for Factory Function is camelCase

function circle(radius) {
    const circle = {
        radius: radius,
        draw: function() {
            console.log('draw');
        }


    }
    return circle //returning the Circle Object to the function caller. 
}

//Creating Objects from Factory Funciton.

console.log('************Creating Objects from Factory Funciton************************');

const c1 = circle(1);
const c2 = circle(5);

console.log('Circle C1 Radius is : ' + c1.radius);
console.log('Circle C2 Radius is : ' + c2.radius);


//return can be given to object directly so that we can remove return statement in below. please see below example

function newCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    }
}


console.log('************Creating Objects from New Circle Factory Funciton************************');

const nc1 = newCircle(100);
const nc2 = newCircle(500);

console.log('NewCircle NC1 Radius is : ' + nc1.radius);
console.log('NewCircle NC2 Radius is : ' + nc2.radius);