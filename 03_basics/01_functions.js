// syntax of a function
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()    // by adding the parenthesis after the function name it will call out the function and execute the value in itself
                  // wihtout parenthesis it wont return any value

// function addTwoNumbers(number1, number2){        
//     console.log(number1 + number2);
// }                

// // addTwoNumbers()  //this will not execute anything as theres no arguement given
//    addTwoNumbers(3, 4)   //this will add these two args now


// function addTwoNumbers(number1, number2){

//     // let result = number1 + number2
//     // return result              
//     return number1 + number2        //alternate way to return the same function  
// }


function loginUserMessage(username = "sam"){
    if(!username){                             //this means that if no username is there then it is undefined
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))





// when making cart for an ecommerce site:

function calculateCartPrice(val1, val2, ...num1){     // ...num1 gathers all the remaining inputs except value 1 and value 2 and clubs them as one single array
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))





//using functions with objects:

const user = {                                   //user is an object here                     
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
