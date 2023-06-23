"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('walking...');
    }
}
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
let teacher = new Teacher('potato', 'w');
console.log(teacher.fullName);
class Student extends Person {
    constructor(studentID, firstName, lastName) {
        super(firstName, lastName);
        this.studentID = studentID;
    }
    study() {
        console.log('studying...');
    }
}
class Principal extends Person {
    get fullName() {
        return 'Principal ' + super.fullName;
    }
}
let student = new Student(2, 'potato', 'wang');
function printNames(persons) {
    for (let person of persons) {
        console.log('aha ' + person.fullName);
    }
}
printNames([
    new Student(1, 'potato', 'wang'),
    new Teacher('wenwen', 'wang'),
    new Principal('kai', 'zhou')
]);
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.hi = 'potato';
seats['A2'] = '6';
class Account {
    constructor(id, owner, _balance, nickname) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this.nickname = nickname;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('invalid amount');
        this._balance += amount;
        this.calculateTax();
    }
    calculateTax() {
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value <= 0)
            throw new Error('invalid value');
        this._balance = value;
    }
}
let account = new Account(123, 'potato', 60);
account.deposit(50);
account.balance = 10;
//# sourceMappingURL=index.js.map