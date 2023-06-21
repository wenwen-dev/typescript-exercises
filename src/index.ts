class Account {
  readonly id: number;
  owner: string;
  balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0)
      throw new Error('invalid amount');
    this.balance += amount;

  }
}

let account = new Account(123, 'potato', 50);

account.deposit(50);
console.log(typeof account);
console.log(account instanceof Account);


