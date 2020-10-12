//Creating an Object with Name, Email, Phone properties along with Two Funcitons called login and logout. 
var UserOne = {
    FirstName: 'Srini',
    LastName: 'Samb',
    Email: 'samb1234@gmail.com',
    Phone: '9000123456',
    login() {
        console.log(this.FirstName + ' has logged in');
    },
    logout() {
        console.log(this.FirstName + ' has logged out');
    }
}

//Using the Object properies. 
console.log('********** Printing Object Properties*********');
console.log(UserOne.FirstName);
console.log(UserOne['LastName']);
console.log(UserOne.Phone);
console.log(UserOne.Email);


//using object functions.
UserOne.login();

UserOne.logout();

//we can also access the property of an object and them modify it during the runtime. 

UserOne.Phone = '+919550654321';


console.log('New phone number of UserOne is: ' + UserOne.Phone);


//Create new properies and add them to the existing object.

UserOne.FullAddress = {
    DoorNum: "20-61",
    AddressLine1: "GPORoad",
    AddressLine2: 'NearBusstop',
    City: 'xyzcity',
    Dist: 'xyzDist',
    State: 'xyzState',
    Country: 'xyzCountry',
    Pincode: 'xyzPincode'
}


//Printing new User Object after adding a propery called FullAddress
console.log('******New User Object is *********')
console.log(UserOne);