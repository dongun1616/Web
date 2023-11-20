//객체에 메서드 정의하기
// const myMath = {
//     PI: 3.14159,
//     square(num) {
//         return num * num;
//     },
//     cube(num) {
//         return num ** 3;
//     }
// }

//this 키워드
const cat = {
    name: 'Blue',
    color: 'grey',
    breed: 'scottish',
    meow() {
        console.log(`${this.name} says MeowWWW`)
    }
}

const meow2 = cat.meow;