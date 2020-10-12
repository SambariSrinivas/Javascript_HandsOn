/**
 * Abstraction in computer programming is a way to reduce complexity and allow efficient design and 
 implementation in complex software systems. 
 * It hides the technical complexity of systems behind simpler APIs

 *Advanteages
1. Helps the user to avoid writing low level code.
2. Avoids code duplication and increases reusability.
3. Can change internal implementation of class independently without affecting the user.
4. Helps to increase security of an application or program as only important details are provided to the user

Abstraction methods are accesible at class level only not at the instance level
 */

class Employee {
    constructor({
        firstname,
        lastname,
        id,
        job
    }) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.id = id;
        this.job = job;
        this.skill = [];
        Employee.count = Employee.count || 0; //Class variable to count the number of employees 
        Employee.count++; //incrementing the class variale after very object is created

    }
    static get Noofemployees() { //static method to get the class variable Employee count  from Employee class, this method cannt be accessbilbe by Object.
        return Employee.count;
    }
    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
    replaceFullName(fullname) {
        if (/[A-Za-z]\s[A-Za-z]/.test(fullname)) {
            [this.firstname, this.lastname] = fullname.split(' ');

        } else {
            throw Error('Entered Full Name is not acceptable');
        }
    }
    learnskill(skill) {
        this.skill.push(skill);

    }

}

console.log('No of Employees are ' + Employee.Noofemployees);

class Job {
    constructor(
        company,
        profession,
        salary
    ) {
        this.company = company;
        this.profession = profession;
        this.salary = salary;
    }
}
const Jhon = new Employee({
    firstname: 'Jhon',
    lastname: 'Dea',
    id: 10001,
    job: new Job('xyzCompnay', 'Developer', 2000000)
});

Jhon.learnskill('JavaScript ES7');
Jhon.learnskill('Java');




console.log(Jhon);

console.log('No of Employees are ' + Employee.Noofemployees);


const Tony = new Employee({
    firstname: 'Tony',
    lastname: 'Blayer',
    id: 10002,
    job: new Job('xyzCompnay', 'Tester', 15000000)
});

Tony.learnskill('Automation');
Tony.learnskill('Manual');




console.log(Tony);
console.log(Tony.getFullName());
Tony.replaceFullName('Adam Shampa');
console.log(Tony);
console.log(Tony.getFullName());

console.log('No of Employees are ' + Employee.Noofemployees);