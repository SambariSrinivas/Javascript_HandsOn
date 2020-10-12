//Object is a physical entity which present in memory.
//Define and Create an Object in JavaScript.

//Variables and Function can be defined in an object. 

//variables and functions should be in key --> value pairs.

//an object may contain another object inside it. 

console.log('************Creation of Objects****************')

const circle = { //Circle is Main Object
    radius: 1,
    isVisible: true,
    location: { //Location is Inner Object of circle
        x: 100,
        y: 110
    },
    draw: function() { // Function is defined as a value to draw key.
        console.log('draw');
    }
}

//printing the above Object in Terminal 

console.log(circle);

//priting only one property of a Object. 
console.log('Radius of Circle is: ' + circle.radius);


//The above of creating objects is not use full hence it is better recommended to use Factory Functions.

//Refer to FactoryFunction.js