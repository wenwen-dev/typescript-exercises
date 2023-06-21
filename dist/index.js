"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error('invalid amount');
        this.balance += amount;
    }
}
let account = new Account(123, 'potato', 50);
account.deposit(50);
console.log(typeof account);
console.log(account instanceof Account);
//# sourceMappingURL=index.js.map