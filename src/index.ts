class Account {
  readonly id: number;
  owner: string;
  private _balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0)
      throw new Error('invalid amount');
    this._balance += amount;
    this.calculateTax();
  }

  private calculateTax(){

  }

  getBalance(): number {
    return this._balance;
  }

}

let account = new Account(123, 'potato', 60);

account.deposit(50);
console.log(typeof account);
console.log(account instanceof Account);


console.log(account.getBalance());





