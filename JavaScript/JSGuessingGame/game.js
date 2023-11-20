// 숫자추측게임
let maximum = parseInt(prompt("enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("enter the valid number!"));
}
const targetNum = Math.floor(Math.random() * maximum + 1)
let count = 1;

let guess = prompt("enter your guess (Type 'q' to quit)");
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("Too high! enter your guess");
        count++;
    }
    else if (guess < targetNum) {
        guess = prompt("Too Low! enter your guess");
        count++;
    }
    else {
        guess = prompt("invalid guess. please enter number or 'q' to quit")
    }
}
if (guess === 'q') {
    console.log("falied")
}
else {
    console.log(`you got it!! try : ${count} times`);
}