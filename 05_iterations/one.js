// for loop

// for (let index = 0; index < 10; index++) {                          // basic synatx of for loop
//     const element = index;
//     console.log(element);
    
// }


// for (let index = 0; index < 10; index++) {        // using if else in for loop                      // basic synatx of for loop
//         const element = index;
//         console.log(element);
//         if (element == 5) {
//             console.log("5 is best number");
//         }
//     }
    


//----------------------------------------------------------------------
 
// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//    for (let j = 1; j <= 10; j++) {
//     console.log(`Inner loop value ${j} and inner loop ${i}`);
//     console.log(i + '*' + j + ' = ' + i*j );                      //this prints table of 1 to 10
//    }
// }



//----------------------------------------------------------------------

// for loop with array

// let myArray = ["flash", "batman", "superman"]
//   console.log(myArray.length);                                 // since the array length is 3 but the index starts from 0 and ends 2
// for (let index = 0; index < myArray.length; index++) {         // so if index <= myArray.length is given then the 3rd index will be undefined 
//     const element = myArray[index];
//     console.log(element);
    
// }

//----------------------------------------------------------------------

// break and continue


// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break                                              // break stops the loop when the if value gets true
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue                                               // continue doesnt stop the loop when if value gets true but only eliminates the required if value from the loop and then loop continues
    }
   console.log(`Value of i is ${index}`);
}