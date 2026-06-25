function outer() {
    let count = 0;
    console.log("Inside outer function count: ", count);
    return function inner() {
        ++count;
        console.log("Inside inner function count: ",count);
    }
}

// let inner = outer();
// inner(); // inner function is able to access variable of outer function even though it stopped executing
// inner();


function createBankAccount(initialAmt) {
    let balance = initialAmt;

    return {
        deposit(amt){
            if(amt <= 0 ) {
                console.log("Invalid deposit amount!");
                return;
            }
            balance+=amt;
            console.log(`INR ${amt} deposited. New Balance is ${balance}`);
        },
        withdraw(amt){
            if(amt <= 0 ) {
                console.log("Invalid withdrawal amount!");
                return;
            }

            if(amt > balance) {
                console.log("Insufficient funds!");
                return;
            }

            balance-=amt;
            console.log(`INR ${amt} withdrawn. New Balance is ${balance}`);
        },
        getBalance() {
            return balance;
        }
    }
}

const account = createBankAccount(500);
console.log("Account balance is", account.getBalance());
account.withdraw(501); // insufficient funds
account.withdraw(250);
account.deposit(320);
console.log("Account balance is", account.getBalance());