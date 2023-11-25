const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve("your fake data");
            }
            reject("request error");
        }, 1000)
    })
}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log("done with request!")
        console.log("data is :", data)
    })
    .catch((err) => {
        console.log("Oh no Error!", err)
    })

//Promise 색 전환
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => {
//         return delayedColorChange('orange', 1000)
//     })
//     .then(() => {
//         return delayedColorChange('yellow', 1000)
//     })
//     .then(() => {
//         return delayedColorChange('green', 1000)
//     })
//     .then(() => {
//         return delayedColorChange('blue', 1000)
//     })
//     .then(() => {
//         return delayedColorChange('indigo', 1000)
//     })
//     .then(() => {
//         return delayedColorChange('violet', 1000)
//     })


// async function rainbow() {
//     await delayedColorChange('red', 1000)
//     await delayedColorChange('orange', 1000)
//     await delayedColorChange('yellow', 1000)
//     await delayedColorChange('green', 1000)
//     await delayedColorChange('blue', 1000)
//     await delayedColorChange('indigo', 1000)
//     await delayedColorChange('violet', 1000)
// }


// async await Promise 사용시 reject 확인하기
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequestPromise('/page1')
        console.log(data1)
        let data2 = await fakeRequestPromise('/page2')
        console.log(data2)

    } catch (e) {
        console.log("catch a error")
        console.log("error is:", e)
    }
}