const password = prompt("enter your password");
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("valid password")
}
else {
    console.log("falid")
}

// 0~5 free
// 5~18 $10
// 18~65 $20
// 65 + free

const age = -1;
if (0 <= age && age < 5 || age >= 65) {
    console.log("Free");
}
else if (5 <= age && age < 18) {
    console.log("$10")
}
else if (18 <= age && age < 65) {
    console.log("$20")
}
else {
    console.warn("invalid age!")
}

const firstName = prompt("enter your first name");
if (!firstName) {
    firstName = prompt("try again");
}