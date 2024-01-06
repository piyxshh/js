const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);           

// console.log(balance.toString().length);    //.toString converts balance to string and .length shows the no. of characters
// console.log(balance.toFixed(1));            //gives decimal points 
 
const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));     //.toPrecision either rounds off numbers before and decimal or take the index depending upon the size in brackets

const hundreds = 1000000 
// console.log(hundreds.toLocaleString('en-IN'));         //this gives , to the numbers in us terms by default but ('eN-In') turns it in indian system

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)