//console.log(typeof score);
//console.log(typeof(score)); //both will give same output

let valueInNumber = Number(score)  //Number allows you convert any datatype like string etc to a number

// console.log(typeof valueInNumber); //this output will give u the type as number even though its a string since it is converted
// console.log(valueInNumber); // this gives output as NaN(not a number) since 33abc is not number

// these are the few experimental results for variable score and its output in the above code

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0   ;using boolean values like true/false gives 1/0



let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn) //this converts any datatype to boolean
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false        ;empty string gives false boolean value
// "hitesh" => true   ;some letters filled string gives true

let someNumber = 33

let stringNumber = String(someNumber)  //this will convert any datatype into strings
// console.log(stringNumber);    //this gives 33 number
// console.log(typeof stringNumber); //but this will give stribg as output 


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion