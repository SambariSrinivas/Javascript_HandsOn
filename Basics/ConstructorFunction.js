//Constructor Function in JavaScript.

//Constructor Function follows the Naming convesion of pascal notation

//Pascal notication is like OneTwoThree

//To Call Constructor Funtion we need to Use 'new' Keyword.

console.log('*************Creating the Constructor Function********');

//In this Constructor Function is variables of an objects are assigned with assignment operator, not with Key Value Pairs like in Factory Function.
//and return statement also not applicable for constructor function. 
function CreateCircle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw', radius);
    }

}

//Creating Objects from Constructor Function requires new keyword.

const circleC1 = new CreateCircle(25);
//Printing the Object of Constructor Function. 

console.log(circleC1);


//Calling the Function of an Object to draw

circleC1.draw();