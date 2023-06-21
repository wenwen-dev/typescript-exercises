class Account { //Pascal
  id: number;
  owner: string;
  balance: number;


  // Qs: only initialise properties? not methods?
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