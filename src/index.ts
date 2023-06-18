type Draggable = {
  drag: () => void
}

type Resizable = {
  resize: () => void;
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
}





function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === 'number')
    return weight * 2.2;
  else {
    return parseInt(weight) * 2.2;
  }
}

console.log(kgToLbs(10));

console.log(kgToLbs('40kg'));


type Employee = {
  readonly id: number, 
  name: string,
  retire: (date: Date) => void
}

let employee: Employee = {
    id: 1, 
    name: '',
    retire: (date: Date) => console.log(date)
}




function calculateTax(income: number, taxYear = 2022): number {

  if (taxYear < 2022)
    return income * 1.2;
  return income * 1.3;
}

calculateTax(20, 2024);

let numbers = [1,2,3, '5'];

let user: [number, string] = [1, 'Wenwen'];
user.push('aha');

const small = 1;
const medium = 2;
const large = 3;

const enum Size { Small, Medium, Large } //default values: 0, 1, 2...

const enum Size2 {Small = 1, Medium, Large} // 1, 2, 3
const enum Size3 {Small = 's', Medium = 'm', Large = 'l' }

let mySize: Size2 = Size2.Medium;

console.log(mySize);


// let sales: number = 123_456_789;
let sales = 123_456_789;
let course: string = 'TypeScript';
let is_published = true;

let level;
// level = 445;
// level = "ssss";

function render(document: any) {
  console.log(document);
}



