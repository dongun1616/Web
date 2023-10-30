const userInput = prompt("enter something");

if (userInput) {
    console.log("truthy");
}
else {
    console.log("falsy");
}

if (0) {
    console.log("Truthy");
}
else {
    console.log("falsy");
}

if (false) {
    console.log("Truthy");
}
else {
    console.log("falsy");
}

if (null) {
    console.log("Truthy");
}
else {
    console.log("falsy");
}

if (undefined) {
    console.log("Truthy");
}
else {
    console.log("falsy");
}

if (NaN) {
    console.log("Truthy");
}
else {
    console.log("falsy");
}