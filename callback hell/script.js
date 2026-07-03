function login(callback) {
    console.log("1. Logging in...");

    setTimeout(() => {
        console.log("2. Logged in Successfully");
        callback();
    }, 2000);
}

function getUser(callback) {
    console.log("3. Getting User...");

    setTimeout(() => {
        console.log("4. User details loaded");
        callback();
    }, 2000);
}

function getOrders(callback) {
    console.log("5. Getting orders...");

    setTimeout(() => {
        console.log("6. Orders loaded");
        callback();
    }, 2000);
}

function getOrderDetails(callback) {
    console.log("7. Getting order details...");

    setTimeout(() => {
        console.log("8. Order details loaded");
        callback();
    }, 2000);
}

function makePayment(callback) {
    console.log("9. Processing payment...");

    setTimeout(() => {
        console.log("10. Payment Successful");
        callback();
    }, 2000);
}

function sendConfirmation(callback) {
    console.log("11. Sending confirmation email...");

    setTimeout(() => {
        console.log("12. Confirmation email sent");
        callback();
    }, 2000);
}

// Callback Hell
login(() => {
    getUser(() => {
        getOrders(() => {
            getOrderDetails(() => {
                makePayment(() => {
                    sendConfirmation(() => {
                        console.log("13. All tasks completed!");
                    });
                });
            });
        });
    });
});