let num1 = 10
let num2 = 10 
console.log(num1 + num2);
console.log('Hello World');
let secondsInYear = 365 * 60 * 60 * 24
console.log(secondsInYear)

const todaysDate = new Date('2022-01-11');
const newYear = new Date( '2022-12-31');
const dateChecker = new Date(2022, 12, 31)

let diff = newYear - todaysDate;
var diffDays = parseInt(( newYear - todaysDate ) / (1000 * 60 * 60 * 24), 10)
console.log(diffDays);