//Create multiple instances of Same Object having same properies but different values of properties.

//For Example in file 1_CreateanObject.js we have created a singleuser, if we need to create mulitiple users we need to repeat the code, this is not best practice
//Hence Classes are introduced in javascript in  ES6.

//A Class is required a constructor function, by default javascript has a default constructor, we can also create our own customer constructors. 



class User {
    constructor(FirstName, LastName, email) { //Custom Constructor
        this.FristName = FirstName;
        this.LastName = LastName;
        this.email = email;
    }

}


//Creting an Object From class

/* 
var UserOne = new User();

new keyword does three things here. 
1. creates an empty object {}
2. sets the values of this to be the new empty Object 
3. calls the constructor method persent inside the class
*/


var UserOne = new User('Srini', 'Samb', 'samb1234@gmail.com');
var UserTwo = new User('Ravi', 'S', 'sravi@gmail.com');

console.log('** ** ** ** Printing the first instanceof User class i.e UserOne ** ** ** ** ');
console.log(UserOne);


console.log('** ** ** ** Printing the second instanceof User class i.e UserTwo ** ** ** ** ');
console.log(UserTwo);