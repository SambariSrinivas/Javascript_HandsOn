//************************* Class Methods *******************/

//if any Object contains any methods we will define then in calls at outside of the consturctor but not inside the constructor.

// we will take the previous example of User-class only and add functions to the class.


class User {
    constructor(FirstName, LastName, email) {
        this.FristName = FirstName;
        this.LastName = LastName;
        this.email = email;
    }
    login() {
        console.log(this.FristName, 'has logged in');
    }
    logout() {
        console.log(this.FristName, 'has logged out');
    }

}


var UserOne = new User('Srini', 'Samb', 'samb1234@gmail.com');
var UserTwo = new User('Ravi', 'S', 'sravi@gmail.com');

console.log('** ** ** ** Printing the Object Functions ** ** ** ** ');
UserOne.login();
UserTwo.logout();