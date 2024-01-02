// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);    // comparison btwn same datatypes is fine and predictable


// console.log("2" > 1);      // but comparison between different datatypes is unpredictable hence avoid that
// console.log("02" > 1);

console.log(null > 0);      //false
console.log(null == 0);     //false
console.log(null >= 0);     //true

// 'comparisons' convert null to a number treating it as a 0.
// thats why null >= 0 is true but null > 0 is false
// equality check(==) and comparisons(><>=<=) work differently. 


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2);