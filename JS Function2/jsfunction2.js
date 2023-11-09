function collectEggs() {
    let totalEggs = 6;
    console.log(totalEggs);
}



// 기본적인 함수
// function add(x, y) {
//     return x + y;
// }

// 함수 표현식
// const add = function (x, y) {
//     return x + y;
// }

//고차 함수
function callTwice(func) {
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll);
}

callTwice(rollDie);

//반환 함수
function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("im function")
        }
    }
    else {
        return function () {
            alert("have a virus!!")
        }
    }
}

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}


// function isBetween(num) {
//     return num >= 50 && num <= 100;
// }
// function isBetween2(num) {
//     return num >= 1 && num <= 10;
// }