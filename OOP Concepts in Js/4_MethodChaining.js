/**
 * 
 * Method Chaining is a process of calling multiple methods immedately one ofter the other one. 
 * but each method in a class should return somthing called "this"
 * refer below example class. 
 *
 */

class Chainable {
    firstMethod() {
        console.log('This is the First Method');
        return this;
    }

    secondMethod() {
        console.log('This is the Second Method');
        return this;
    }

    thirdMethod() {
        console.log('This is the Third Method');
        return this;
    }
}

//Creating an Object of Chainable class and calling methodchaining of the same Object.

const chainableInstance = new Chainable()
chainableInstance.firstMethod().secondMethod().thirdMethod();

// Console Output
// This is the First Method
// This is the Second Method
// This is the Third Method