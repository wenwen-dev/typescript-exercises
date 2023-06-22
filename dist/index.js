"use strict";
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