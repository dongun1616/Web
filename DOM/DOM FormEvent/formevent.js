const form = document.querySelector("#shelterForm")
const input = document.querySelector("#catName")
const list = document.querySelector("#cats")
form.addEventListener('submit', function (e) {
    e.preventDefault()    //요청을 전송하지 않도록 막는용도
    const catName = input.value
    const newLi = document.createElement("li")
    newLi.innerText = catName
    list.append(newLi)
    input.value = ""
})
