function sing() {
    console.log("DO")
    console.log("RE")
    console.log("MI")
}

function greet(firstName, lastName) {
    console.log(`firstName is ${firstName} ${lastName[0]}!`);
}

function rant(message) {
    console.log(`${message}`.toUpperCase());
}

function repeat(str, num) {
    for (let i = 0; i < num; i++) {
        console.log(str);
    }
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}

// 마지막 요소 연습

function lastElement(array) {
    if (array.length < 1) {
        return null;
    }
    let lastArray = array[array.length - 1];
    return lastArray;
}

//대문자 반환 연습

function capitalize(str) {
    let resultStr = str[0].toUpperCase() + str.slice(1);;
    return resultStr;
}

//배열 합계 연습

function sumArray(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}

//요일 연습

function returnDay(days) {
    const witd = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let result = "";
    switch (days) {
        case 1:
            result = witd[0];
            break;
        case 2:
            result = witd[1];
            break;
        case 3:
            result = witd[2];
            break;
        case 4:
            result = witd[3];
            break;
        case 5:
            result = witd[4];
            break;
        case 6:
            result = witd[5];
            break;
        case 7:
            result = witd[6];
            break;
        default:
            return null;
    }
    return result;
}