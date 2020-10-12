/*
 * Encapsulation is used for security purpose where the implemenation is not known to user, but user can access the object behavior
 * Encapsulation includes the idea that the data of an object should not be directly exposed. 
 * Instead, callers that want to achieve a given result are coaxed into proper usage by invoking methods (rather than accessing the data directly).
 * Object should be created first and then exposed the behavior via different methods
 * */

/*
Encapsulation is used for security. 
1. security -- give controlled acceess
2. Hide Implementation and expose the behavior
3. Loose coupling - Modify the implementation at any point of time. 
4. property with Underscore _ will make that property as private property so that it is safe and not exposed to object. 
*/

class Employee {

    setEmployeeDetails(Name, Id, PhoneNum) {
        this.Name = Name;
        this.Id = Id;
        this.PhoneNum = PhoneNum;
    }
    getEmployeeName() {
        return this.Name;
    }
    getEmployeeId() {
        return this.Id;
    }
    getEmployeePhone() {
        return this.PhoneNum;
    }
}

var Emp1 = new Employee();
Emp1.setEmployeeDetails('Srini', 10001, '+919000123456');

console.log(Emp1.getEmployeeName());
console.log(Emp1.getEmployeeId());
console.log(Emp1.getEmployeePhone());