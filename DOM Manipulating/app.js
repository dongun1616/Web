// DOM 모든 a태그 선택후 텍스트 바꾸기
const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = "I am link!!!"
// }

//DOM 모든 a태그 선택후 스타일 바꾸기
for (let links of allLinks) {
    links.style.color = "green"
    links.style.textDecorationColor = "magenta";
    links.style.textDecorationStyle = "wavy";
}


// DOM 실습 무지개색 텍스트
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

// const allSpans = document.querySelectorAll("span")
// for (let i =0;i<colors.length;i++){
//     allSpans[i].style.color = colors[i];
// }


// DOM 실습 classList 색 반전
// const allLi = document.querySelectorAll("li")
// for(let i = 0;i<allLi.length;i++){
//     allLi[i].classList.toggle("highlight");
// }


// DOM 실습 요소 생성과 appendChild를 사용한 버튼 100개 만들기
// const div = document.querySelector('#container')

// for(let i =0;i<100;i++){
//     const newBt = document.createElement('button')
//     newBt.innerText = "Hey!"
//     div.appendChild(newBt)
// }