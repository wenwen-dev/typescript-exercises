


class Person {
  constructor(
    public firstName: string,
    public lastName: string
  ) {}

  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  protected walk(): void {
    console.log('walking...');
  }
}



class Teacher extends Person {
  override get fullName(): string {
    return 'Professor ' + super.fullName;
  }
}

let teacher = new Teacher('potato', 'w');
console.log(teacher.fullName);


class Student extends Person {
  constructor(public studentID: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  study(): void {
    this.walk
    console.log('studying...');
    
  }
}

class Principal extends Person {
  override get fullName(): string {
    return 'Principal ' + super.fullName;
  }
}

let person = new Person('ss', 's');
let principal = new Principal('3', '4');
// principal.walk - would not work on protected, coz outside of classes






let student = new Student(2, 'potato', 'wang');

function printNames(persons: Person[]) {
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






