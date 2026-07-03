function login() {
    return new Promise((resolve) => {
        console.log("1. Logging in...");

        setTimeout(() => {
            console.log("2. Logged in Successfully");
            resolve();
        }, 2000);
    });
}

function getUser() {
    return new Promise((resolve) => {
        console.log("3. Getting User...");

        setTimeout(() => {
            console.log("4. User details loaded");
            resolve();
        }, 2000);
    });
}

function getOrders() {
    return new Promise((resolve) => {
        console.log("5. Getting orders...");

        setTimeout(() => {
            console.log("6. Orders loaded");
            resolve();
        }, 2000);
    });
}

function getOrderDetails() {
    return new Promise((resolve) => {
        console.log("7. Getting order details...");

        setTimeout(() => {
            console.log("8. Order details loaded");
            resolve();
        }, 2000);
    });
}

function makePayment() {
    return new Promise((resolve) => {
        console.log("9. Processing payment...");

        setTimeout(() => {
            console.log("10. Payment Successful");
            resolve();
        }, 2000);
    });
}

function sendConfirmation() {
    return new Promise((resolve) => {
        console.log("11. Sending confirmation email...");

        setTimeout(() => {
            console.log("12. Confirmation email sent");
            resolve();
        }, 2000);
    });
}

async function loadData() {
    console.log("1");
    await login();
    await getUser();
    await getOrders();
    await getOrderDetails();
    await makePayment();
    await sendConfirmation();
    console.log("2");
}

console.log("3");
loadData();
console.log("4");