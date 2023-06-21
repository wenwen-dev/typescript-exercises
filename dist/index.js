"use strict";
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
    getBalance() {
        return this._balance;
    }
}
let account = new Account(123, 'potato', 60);
account.deposit(50);
console.log(typeof account);
console.log(account instanceof Account);
console.log(account.getBalance());
//# sourceMappingURL=index.js.map