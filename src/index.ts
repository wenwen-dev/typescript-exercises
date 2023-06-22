class SeatAssignment {
  // A1: 'w';
  // A2: 'p';
  // A3: 'k';
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.hi = 'potato';
seats['A2'] = '6';



class Account {

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
    public nickname?: string) {

  }

  deposit(amount: number): void {
    if (amount <= 0)
      throw new Error('invalid amount');
    this._balance += amount;
    this.calculateTax();
  }

  private calculateTax(){

  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    if (value <= 0)
      throw new Error('invalid value');
    this._balance = value;
  }

}

let account = new Account(123, 'potato', 60);

account.deposit(50);

account.balance = 10;






