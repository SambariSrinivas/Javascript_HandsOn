/*
Cloning an Object to another Object

*/

//Create an Object

const rectangle = {
    length: 5,
    breadth: 3
};

//1. Cloning using for-in loop, first create a blank object and then clone the previous object to new blank object

const rectangle2 = {};

for (let i in rectangle) {
    rectangle2[i] = rectangle[i];
}
console.log('***********Printing Rectangle2 Object********');
console.log(rectangle2);

//2. Using Object.assign method

rectangle3 = Object.assign({}, rectangle);
console.log('***********Printing Rectangle3 Object********');
console.log(rectangle3);

//3. clone the same object and at the same time add new properties to the Object

const cube = Object.assign({ height: 10 }, rectangle);
console.log('***********Printing Cube Object********');
console.log(cube);


//4. Another method of cloning the object is using spread (...) Operator

const Cube2 = {...cube };

console.log('***********Printing Cube2 Object ********');
console.log(Cube2);