/**
 * Inherting is an approach of sharing common functionalities between collection of class
 * parent or super or base  from where the functinalites are inherited
 * child classes where they extended from a parent or super or base class. 
 * chlid classes have the same properites and methods also have the possibilites to overwrite them
 * chlid classes can also have the additional properiteis and method which are not available in parent class. 
 * it is best practice to call super(); construtor of parent class in child class constructor
 * because before creating child class parent object should be created that is why we need construct super class object. 
 * 
 */

class ClassA {
    constructor() {
        this.PropA = 'A';
    }
    methodA() {
        return this.PropA;
    }
}
class ClassB extends ClassA {
    constructor() {
        super();
        this.PropB = 'B';
    }
    methodB() {
        return this.PropB + super.methodA();
    }
}

class ClassC extends ClassB {
    constructor() {
        super();
        this.PropC = 'C';
    }
    methodC() {
        return this.PropC + super.methodB();
    }
}
const a = new ClassA();
const b = new ClassB();
const c = new ClassC();
console.log(a);
console.log(b);
console.log(c);
console.log(c.methodA() + '\n' + c.methodB());
console.log(c.PropA + '\n' + c.PropB + '\n' + c.PropC);

console.log('********Another example of Inheritance with Vehicle Class.************')

class Vehicle {

    setName(name) {
        this.name = name;
    }
    setModel(model) {
        this.model = model;
    }
    setFuelCapacity(fuelcapacity) {
        this.fuelcapacity = fuelcapacity;
    }
    setNumOfTyres(numTyres) {
        this.numTyres = numTyres;
    }
    setcolour(colour) {
        this.colour = colour;
    }
}


class Car extends Vehicle {
    setHeight(height) {
        this.height = height;
    }
    setSeatcapacity(seatcapacity) {
        this.seatcapacity = seatcapacity;


    }
}


var Car1 = new Car();
Car1.setName('Suzuki');
Car1.setModel('ZDI+');
Car1.setFuelCapacity('40ltr');
Car1.setNumOfTyres(4);
Car1.setcolour('OliveGray');
Car1.setSeatcapacity(6);
Car1.setHeight('5 mtr');

console.log('************ My Car details are ****************');
console.log(Car1);