//setTimeout 함수
// console.log("sending server!")
// setTimeout(() => {
//     console.log("here data...")
// }, 3000)
// console.log("the End")


//CallBack 색 전환
const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {

                })
            })
        })
    })
})

//Promise 색 전환
const delayedColorChange2 = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve();
        }, delay)
    })
}

delayedColorChange2('red', 1000)
    .then(() => {
        return delayedColorChange2('orange', 1000)
    })
    .then(() => {
        return delayedColorChange2('yellow', 1000)
    })
    .then(() => {
        return delayedColorChange2('green', 1000)
    })
    .then(() => {
        return delayedColorChange2('blue', 1000)
    })
    .then(() => {
        return delayedColorChange2('indigo', 1000)
    })
    .then(() => {
        return delayedColorChange2('violet', 1000)
    })