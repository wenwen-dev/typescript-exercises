"use strict";
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else {
        return parseInt(weight) * 2.2;
    }
}
console.log(kgToLbs(10));
console.log(kgToLbs('40kg'));
let employee = {
    id: 1,
    name: '',
    retire: (date) => console.log(date)
};
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(20, 2024);
let numbers = [1, 2, 3, '5'];
let user = [1, 'Wenwen'];
user.push('aha');
const small = 1;
const medium = 2;
const large = 3;
let mySize = 2;
console.log(mySize);
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
//# sourceMappingURL=index.js.map