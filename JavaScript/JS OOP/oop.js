// new 연산자 예시
// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
// }
// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// const color1 = new Color(40, 50, 60);
// const color2 = new Color(0, 0, 0);


//class 예시
// class Color {
//     constructor(r, g, b, name) {
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.name = name;
//     }
//     rgb() {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     }
//     hex() {
//         const { r, g, b } = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
// }

// const red = new Color(255, 67, 89, 'tomato');
// const white = new Color(255, 255, 255, 'white');


//extend 키워드와 super 키워드
class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        super(name, age)
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'Meowwwwww!';
    }
}


class Dog extends Pet {
    bark() {
        return 'Wooof!';
    }
}