/*
Enumerating Properties of an Object
Get all the Properties of an Object

*/

const circle = {
    radius: 1,
    location() {
        x: 10;
        y: 12
    }
}

//1. for-in loop
console.log('******Getting Object Parameters from for-in loop******');
for (let key in circle) {
    console.log(key, circle[key]);
}

//2. for--of loop using Object.keys method
console.log('******Getting Object Parameters from for-of loop using Object.keys method******');
for (let i of Object.keys(circle)) { //Object.Keys() will return a string Array, so that String array can be iterable using for-of loop
    console.log(i, circle[i]);
}
//3. For-Of Loog Using Object.entries method
console.log('******Getting Object Parameters from for-of loop using Object.entries method******');
for (let j of Object.entries(circle)) {
    console.log(j, circle[j]);
}


//To check a specific property available in an Object or Not
if ('price' in circle) {
    console.log('Yes, Price is Available in Circle Object.');
} else {
    console.log('Price is not Available in Circle Object.');
}


//To check a specific property available in an Object or Not
if ('radius' in circle) {
    console.log('Yes, Radius is Available in Circle Object.');
} else {
    console.log('Radius is not Available in Circle Object.');
}