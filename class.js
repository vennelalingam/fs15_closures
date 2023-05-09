
function makeMultiplier(n){
// the below function that gets return from the other func
// is called a closure
    return function(x){
        return x * n;
    }

}

// const multiplyByTwo = makeMultiplier(2);
// const multiplyByFive = makeMultiplier(5);

// console.log(multiplyByTwo(5)); // 10
// console.log(multiplyByFive(5)); // 25

/*--------------------------
    Closures
Why would you want to return a function?
Lexical scoping
A closure is a combination of a function and the 
environment in which it is contained.

-----------------------------*/

function createPasswordChecker(newPassword){
    let password = newPassword;
    return function createPasswordChecker(guess) {
        return guess === password;
    }
}

// const checkSofiaPassword =
// createPasswordChecker("123");
// checkSofiaPassword("333");  // false
// checkSofiaPassword("123");  // true

/****************   Examples    ********************/

// Creating a higher order function that returns a function
// allows us to use that closure in multiple instances

function makeAdder(x){
    // private scope remembers x
    return function(y){
        return x + y;
    }
}

// const addFive = makeAdder(5); // this is the closure to call
// console.log(addFive(2));    //  7

// const addTen = makeAdder(10);
// console.log(addTen(2)); //  12
// console.log(addTen(7)); // 17

//---------------------------------------

// we can also use private variables to hide information,
// while still using it to affect the logic of other
// parts of the code.

function createBank(x){
    let balance = x;
    return function (newAmount) {
        balance += newAmount;
        return balance > 0 ? "$$" : "OVERDRAWN";
    }
}

// const sofiaBankTransactions = createBank(100);
// sofiaBankTransactions(50);  //  $$
// sofiaBankTransactions(20);  //  $$
// sofiaBankTransactions(-300);    //  OVERDRAWN