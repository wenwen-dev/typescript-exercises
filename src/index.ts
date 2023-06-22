class Ride {
  private static _activeRides: number = 0;

  start(): void {
    Ride._activeRides++;

  }

  stop(): void {
    Ride._activeRides--;

  }

  static get activeRides(): number {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();

ride2.start();

console.log(Ride.activeRides);




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






