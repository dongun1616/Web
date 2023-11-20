// onclick 이벤트
const btn = document.querySelector("#v2")

btn.onclick = function () {
    console.log("you click me!!!")
}

// onmouseenter 이벤트
function scream() {
    console.log("AAAHHHHHHHHH!!")
}

btn.onmouseenter = scream;


// addEventListener 메서드
const btn3 = document.querySelector("#v3")

btn3.addEventListener('click', () => {
    alert("clicked!")
})

function twist() {
    console.log("twist!")
}
function shout() {
    console.log("shout!")
}
const tasButton = document.querySelector("#tas")
// tasButton.onclick = twist;
// tasButton.onclick = shout;
tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)