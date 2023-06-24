// http://mywebsite.com/users
// http://mywebsite.com/products

interface Result<T> {
// when declaring interface, interface name followed by '<T>'; 
  data: T | null;
  // use T
  error: string | null;
}
function fetch<T>(url: string): Result<T> {
  // because function returns a generic result, we need to also add the <T> right after function name too.
  return {data: null, error: null}
}
interface User {
  username: string;
}
interface Product {
  title: string;
}

let result = fetch<Product>('anUrl');
 //need to specify because tsc can't infer from generic type here

 result.data?.title

class ArrayUtils {
  
  static wrapInArray<T>(value: T) {
    return [value];
  }

}



let numbers = ArrayUtils.wrapInArray('3');

class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair(6, 'hello') //can implicitly annotate type, not using <>



class Logger {
  constructor(public fileName: string) {}
  writeToFile(message: string): void {
  }
}

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    // return this.firstName + ' ' + this.lastName;
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  constructor(public salary: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
} //q: anything else after calling super()? a: nope, coz the salary property is created, nothing else needs to be done


//private: only visible within the class; protected: is also visible to its sub classes

interface Employee {
  name: string;
  salary: number;
  address: Address;
}

interface Address {
  street: string;
  city: string;
  zipCode: number;
}





// interface Person {
//   name: string;
// }

// let person: Person = {
//   name: 'potato'
// };

// type People = {
//   name: string;
// }

// let people: People = {
//   name: 'kai'
// }

// // Calendar: GOogleCal, AppleCal, OutlookCal

// abstract class Calendar {
//   constructor(public name: string) {}
//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }

}
// class AppleCalendar extends Calendar {
//   override addEvent(): void {
    
//   }

//   override removeEvent(): void {
    
//   }
// }

// abstract class Shape {
//   constructor(public color: string) {}
//   abstract render(): void;
// }

// class Circle extends Shape {
//   constructor(public radius: number, color: string) {
//     super(color);
//   }
//   override render(): void {
//     console.log('rendering a circle');
//   }
// }


// class Person {
//   constructor(
//     public firstName: string,
//     public lastName: string
//   ) {}

//   get fullName(): string {
//     return this.firstName + ' ' + this.lastName;
//   }

//   protected walk(): void {
//     console.log('walking...');
//   }
// }



// class Teacher extends Person {
//   override get fullName(): string {
//     return 'Professor ' + super.fullName;
//   }
// }

// let teacher = new Teacher('potato', 'w');
// console.log(teacher.fullName);


// class Student extends Person {
//   constructor(public studentID: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }

//   study(): void {
//     this.walk
//     console.log('studying...');
    
//   }
// }

// class Principal extends Person {
//   override get fullName(): string {
//     return 'Principal ' + super.fullName;
//   }
// }

// let person = new Person('ss', 's');
// let principal = new Principal('3', '4');
// // principal.walk - would not work on protected, coz outside of classes






// let student = new Student(2, 'potato', 'wang');

// function printNames(persons: Person[]) {
//   for (let person of persons) {
//     console.log('aha ' + person.fullName);
//   }
// }

// printNames([
//   new Student(1, 'potato', 'wang'),
//   new Teacher('wenwen', 'wang'),
//   new Principal('kai', 'zhou')
// ]);







// class Ride {
//   private static _activeRides: number = 0;

//   start(): void {
//     Ride._activeRides++;

//   }

//   stop(): void {
//     Ride._activeRides--;

//   }

//   static get activeRides(): number {
//     return Ride._activeRides;
//   }
// }

// let ride1 = new Ride();
// ride1.start();
// let ride2 = new Ride();

// ride2.start();

// console.log(Ride.activeRides);




// class SeatAssignment {
//   // A1: 'w';
//   // A2: 'p';
//   // A3: 'k';
//   [seatNumber: string]: string;
// }

// let seats = new SeatAssignment();
// seats.hi = 'potato';
// seats['A2'] = '6';



// class Account {

//   constructor(
//     public readonly id: number,
//     public owner: string,
//     private _balance: number,
//     public nickname?: string) {

//   }

//   deposit(amount: number): void {
//     if (amount <= 0)
//       throw new Error('invalid amount');
//     this._balance += amount;
//     this.calculateTax();
//   }

//   private calculateTax(){

//   }

//   get balance(): number {
//     return this._balance;
//   }

//   set balance(value: number) {
//     if (value <= 0)
//       throw new Error('invalid value');
//     this._balance = value;
//   }

// }

// let account = new Account(123, 'potato', 60);

// account.deposit(50);

// account.balance = 10;






