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