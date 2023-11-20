let random = Math.random();

if (random < 0.5) {
    console.log("number is less than 0.5!!");
}
else {
    console.log("number is greater than 0.5!!");
}
console.log(random);



const dayOfWeek = prompt('Enter a day').toLowerCase();

if (dayOfWeek === 'monday') {
    console.log('I hate Monday!');
}
else if (dayOfWeek === 'saturday') {
    console.log('I love Saturday');
}
else if (dayOfWeek === 'friday') {
    console.log('I wating Friday');
}
else {
    console.log("meh");
}

// 0 - 5 - FREE
// 5 - 10 CHILD $10
// 10 - 65 ADULT $20
// 65 + SENIOR $10

const age = 63;

if (age < 5) {
    console.log("You ar a baby. For free")
}
else if (age < 10) {
    console.log("You ar a child. For $10")
}
else if (age < 65) {
    console.log("You ar a adult. For $20")
}
else {
    console.log("You ar a senior. For $10")
}


const password = prompt("Please enter a new password");

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Valid password")
    }
    else {
        console.log("Password cannot contain spaces!")
    }
}
else {
    console.log("Password too short Must be 6+ character")
}

const day = 'a';
switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 'a':
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Tursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
    case 7:
        console.log("weekend")
        break;
    default:
        console.log("i dont know")
}