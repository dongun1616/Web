// getElementsByTagName 선택 메소드
// const allIamges = document.getElementsByTagName("img")

// for (let img of allIamges) {
//     console.log(img.src);
// }


// getElementsByClassName 선택 메소드
// const squareImages = document.getElementsByClassName("square");

// for (let img of squareImages) {
//     img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg"
// }


//querySelectorAll 선택 메소드
const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href);
}