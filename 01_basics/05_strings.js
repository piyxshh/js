const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");   //this syntax is not favourable

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //use this syntax with placeholders with $ sign instead.


const gameName = new String('hitesh-hc-com') 

// console.log(gameName[0]);     //this gives the 0th index
// console.log(gameName.__proto__);


// console.log(gameName.length);           //gives the index size
// console.log(gameName.toUpperCase());     //converts string to uppercase letters
console.log(gameName.charAt(2));         //charAt is used to see the character at given index(2nd in this case)
console.log(gameName.indexOf('t'));     //indexOf is used to get the index number of the particular letter

const newString = gameName.substring(0, 4)    //substring is used to print selected part of a string
console.log(newString);                      //index 0 to 3 will be printed. 4th is excluded.

const anotherString = gameName.slice(-8, 4)     
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());       //trims unnecessary spaces

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))      //replaces %20 with -

console.log(url.includes('hitesh'))       //includes is used to check whether the object exists in the givn string or not
                                          //this will print true in this case
                                          
                                          
console.log(gameName.split('-'));       // splits the string on the basis of given object