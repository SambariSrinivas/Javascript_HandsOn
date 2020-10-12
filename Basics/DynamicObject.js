/*
In Javascript Objects have Dynamic nature, which means we can add or delete
more properies to the object during runtime

*/
console.log('************* Dynamic Properties of an Object*************');

const circle = {

    raidus: 1,
    colour: 'RED',
    log() {

    }

}

//Print the above Cirlce Object.
console.log('Printing the circle Object');
console.log(circle);

/*
Adding more properties to the above Object

*/

circle.price = 100;
circle.location = function() {
    x: 10;
    y: 20
};

//Print the above Cirlce Object after adding new properies.
console.log('******Printing the circle Object after adding new properties******');
console.log(circle);

/*
Deleting some properties from the above Object

*/
delete circle.price;



//Print the above Cirlce Object after adding new properies.
console.log('******Printing the circle Object after deleting some properties******');
console.log(circle);