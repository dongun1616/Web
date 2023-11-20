//for 루프

// for (let i = 1; i < 21; i += 2) {
//     console.log(i);
// }


// for (let j = 10; j < 1001; j *= 10) {
//     console.log(j);
// }

//array 루프

// const animals = [
//     "dog",
//     "cat",
//     "rabbit",
//     "rion",
//     "tiger",
//     "monkey",
//     "hamster",
//     "bird",
//     "horse",
//     "alpaca",
//     "rama",
//     "snake",
// ]

// for (let i = animals.length - 1; i > -1; i--) {
//     console.log(animals[i].toUpperCase())
// }

//다중 루프

// for (let i = 1; i < 11; i++) {
//     console.log(`i is : ${i}`);
//     for (let j = 1; j < 4; j++) {
//         console.log(`    j is : ${j}`);
//     }
// }

//다중 배열 루프

// const seatingChart = [
//     ["kenny", "erick", "nami"],
//     ["micea", "ikea", "donny", "jack"],
//     ["yuma", "sakura", "cham", "caul"]
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`ROW #${i + 1}`);
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }

// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }

// while 루프

// let count = 0;
// while (count < 10) {
//     console.log(count);
//     count++;
// }

//while 배열 루프

// const secret = "BabyHippo";

// let guess = prompt("enter the password");
// while (guess !== secret) {
//     prompt("enter the password");
// }
// console.log("congratheration");

//for of 루프

// const subreddits = ["cringe", "book", "chickens", "funny", "pics", "soccer"]

// for (let sub of subreddits) {
//     console.log(`visit reddit.com/r/${sub}`);
// }

// for (let char of "hello world") {
//     console.log(char);
// }

// 객체 루프

const testScore = {
    akeenan: 80,
    damon: 77,
    kacy: 89,
    shawn: 91,
    sonny: 73,
    nadia: 98,
    elviar: 81
}

// for (let person in testScore) {
//     console.log(`${person} socred ${testScore[person]}`);
// }

let total = 0;
let scores = Object.values(testScore);
console.log(Object.entries(testScore));
for (let score of scores) {
    console.log(score)
    total += score
}
console.log(`average = ${total / scores.length}`)