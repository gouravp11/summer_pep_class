// const pr = new Promise((resolve, reject)=>{
//     console.log("Inside promise executor function")
//     let success = true;

//     setTimeout(() => {
//         if(success) {
//             resolve("Success");
//         } else {
//             reject("Failure");
//         }
//     }, 1000)
// });

// console.log(pr);

// pr
// .then((data) => {
//     console.log(pr);
//     console.log(data)
// })
// .catch((data) => console.log(data))
// .finally(() => console.log("Finished"));
// console.log("Hello");

// function login() {
//     return new Promise((resolve) => {
//         console.log("1. Logging in...");

//         setTimeout(() => {
//             console.log("2. Logged in Successfully");
//             resolve();
//         }, 2000);
//     });
// }

// function getUser() {
//     return new Promise((resolve) => {
//         console.log("3. Getting User...");

//         setTimeout(() => {
//             console.log("4. User details loaded");
//             resolve();
//         }, 2000);
//     });
// }

// function getOrders() {
//     return new Promise((resolve) => {
//         console.log("5. Getting orders...");

//         setTimeout(() => {
//             console.log("6. Orders loaded");
//             resolve();
//         }, 2000);
//     });
// }

// function getOrderDetails() {
//     return new Promise((resolve) => {
//         console.log("7. Getting order details...");

//         setTimeout(() => {
//             console.log("8. Order details loaded");
//             resolve();
//         }, 2000);
//     });
// }

// function makePayment() {
//     return new Promise((resolve) => {
//         console.log("9. Processing payment...");

//         setTimeout(() => {
//             console.log("10. Payment Successful");
//             resolve();
//         }, 2000);
//     });
// }

// function sendConfirmation() {
//     return new Promise((resolve) => {
//         console.log("11. Sending confirmation email...");

//         setTimeout(() => {
//             console.log("12. Confirmation email sent");
//             resolve();
//         }, 2000);
//     });
// }

// login()
//     .then(() => getUser())
//     .then(() => getOrders())
//     .then(() => getOrderDetails())
//     .then(() => makePayment())
//     .then(() => sendConfirmation())
//     .then(() => {
//         console.log("13. All tasks completed!");
//     })
//     .catch((err) => {
//         console.error("Something went wrong:", err);
//     });


// PROMISE API

function getCategories() {
    return new Promise((resolve, reject) => {
        let success = false;

        setTimeout(() => {
            if(success) {
                resolve("Categories Loaded");
            } else {
                reject("Categories Loading failed");
            }
        }, 2000);
    });
}

function getProducts() {
    return new Promise((resolve, reject) => {
        let success = false;

        setTimeout(() => {
            if(success) {
                resolve("Products Loaded");
            } else {
                reject("Products Loading failed");
            }
        }, 1000);
    });
}

function getOffers() {
    return new Promise((resolve, reject) => {
        let success = true;

        setTimeout(() => {
            if(success) {
                resolve("Offers Loaded");
            } else {
                reject("Offers Loading failed");
            }
        }, 2000);
    });
}

// Promise.all([
//     getProducts(),
//     getCategories(),
//     getOffers()
// ])
// .then((data) => {
//     console.log("Data", data);
// })
// .catch((err) => {
//     console.log("Error: ",err);
// });

Promise.allSettled([
    getProducts(),
    getCategories(),
    getOffers()
])
.then((data) => {
    console.log("Data", data);
})
.catch((err) => {
    console.log("Error: ",err);
});

// Promise.any([
//     getProducts(),
//     getCategories(),
//     getOffers()
// ])
// .then((data) => {
//     console.log("Data", data);
// })
// .catch((err) => {
//     console.log("Error: ",err);
// });

// Promise.race([
//     getProducts(),
//     getCategories(),
//     getOffers()
// ])
// .then((data) => {
//     console.log("Data", data);
// })
// .catch((err) => {
//     console.log("Error: ",err);
// });