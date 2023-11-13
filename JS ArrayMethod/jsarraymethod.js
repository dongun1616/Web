const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1999
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 2001
    },
    {
        title: 'Parasite',
        score: 95,
        year: 1989
    },
    {
        title: 'Alien',
        score: 90,
        year: 2002
    }
]
//forEach 메서드


// numbers.forEach(function (el) {
//     console.log(el);
// })


// for (let el of numbers) {
//     console.log(el);
// }

// movies.forEach(function (movie) {
//     console.log(`${movie.title} - ${movie.score}`);
// })


//map 메서드

// const double = numbers.map(function (num) {
//     return num * 2;
// })

// const favMovie = movies.map(function (movie) {
//     return movie.title.toUpperCase();
// })


//화살표 함수
// const adds = function (x, y) {
//     return x + y;
// }
// const add = (x, y) => {
//     return x + y;
// }

// const square = (x) => {
//     return x ** 2;
// }

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }


//화살표 함수 반환
// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// )

// const add = (a, b) => a + b


// 화살표 함수 요약
// const favMovie = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })

// const favMovie = movies.map(movie => {
//     return `${movie.title} - ${movie.score / 10}`
// })

// const favMovie = movies.map(movie => (
//     `${movie.title} - ${movie.score / 10}`
// ))

//화살표 함수와 this
const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this.fullName())
        }, 3000)
    }
}



//filter 메서드
// const goodMovie = movies.filter(n => (
//     n.score >= 90
// ))

// const goodTitles = goodMovie.map(n => (
//     n.title
// ))
// movies.filter(m => m.score >= 90).map(n => n.title);

// const badMovie = movies.filter(n => (
//     n.score < 90
// ))

// const recentMovie = movies.filter(n => (
//     n.year > 1999
// ))


//reduce 메서드
// const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// const totalResult = prices.reduce((total, price) => (
//     total + price
// ))

// const minPrice = prices.reduce((min, price) => {
//     if (price < min) {
//         return price;
//     }
//     return min;
// })

// const bestMovie = movies.reduce((max, movie) => {
//     if (movie.score > max) {
//         return movie;
//     }
//     return max;
// })