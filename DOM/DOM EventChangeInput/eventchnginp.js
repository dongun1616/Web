const input = document.querySelector('input')
const h1 = document.querySelector('h1')

// 변경 이벤트
// input.addEventListener('change', function (e) {
//     h1.innerText = input.value
// })

// 입력 이벤트
input.addEventListener('input', function (e) {
    h1.innerText = input.value
})