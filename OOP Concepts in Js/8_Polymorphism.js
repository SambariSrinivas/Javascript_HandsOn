/**
 * Polymorphism in javascript
 * Poly = Many
 * morph = Forms 
 * 
 * polymorphism = many forms
 * 
 * process of representing something in manyforms. 
 * 
 */

class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound
    }
    eats() {
        console.log(this.name + ' eats food');
    };
    sounds() {
        console.log(this.name + ' sounds like ' + this.sound);
    }
}
let Dog = new Animal('Jimmy', 'BowwBow');
Dog.eats();
Dog.sounds();


//Now we will create an cat Class and over right the eats function and sound function in child class.

//This is called Polymorphism, we are over righting the parent method in child class to represent in different way.
console.log('*******PLOYMORPHISM in CAT CLASS ***********')
class Cat extends Animal {
    eats() {
            console.log(this.name + ' drinks milk ');
        } //eats behaviour is changed from eating to drinking
}

let BlackCat = new Cat('Tom', 'MeowwMeoww');
BlackCat.eats();
BlackCat.sounds();