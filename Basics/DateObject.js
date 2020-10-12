/*

DateObject is a very important Object. 

Date can be created or manipulated 

and Date can be given in any format

*/

const date1 = new Date();
console.log('Date1 is :' + date1);

const date2 = new Date('2020 Oct 06');

console.log('Date2 is : ' + date2.toISOString());

console.log(date2.getMonth());

console.log(date2.toLocaleString());