let users = ["john", "jaeger", "leo", "admin"];

for(let i =0; i< users.length; i++){
    if(users[i] === "admin"){
        console.log(`Hello ${users[i]}, would you like to see a status report?`);
    }
    console.log(`Hello ${users[i]}, thank you for logging in again`);
}