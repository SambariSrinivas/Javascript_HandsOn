/*

In JavaScript Variables are pointed by Value Type
and Ojbects are pointed by Reference Type

*/

//Lets See the example of ValueType pointing

let x = 10;
y = x;
x = 20;

console.log('********ValueType pointing********');

console.log('value of x is :' + x);
console.log('value of y is :' + y);

//Lets see the example of ReferenceType Pointing


const p = { value: 20 };
q = p;
p.value = 55;

console.log('********ReferenceType pointing********');

console.log('p.value is : ' + p.value);
console.log('q.value is:' + q.value);