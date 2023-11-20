// 기본 매개변수
// function rollDie(max) {
//     if (max === undefined) {
//         max = 6;
//     }
//     return Math.floor(Math.random() * max) + 1
// }

// function rollDie(max = 6) {
//     return Math.floor(Math.random() * max) + 1
// }

// function greet(person, msg = "hi there", punc = "!") {
//     console.log(`${msg} ${person}${punc}`);
// }


// spread 배열 리터럴 전개 구문
// const cats = ["Blue", "Scout", "Rockat"];
// const dogs = ["Rusty", "Wyatt"];

// const allPets = [...cats, ...dogs]


// spread 객체 리터럴 전개 구문
// const feline = { legs: 4, family: "Felidae" };
// const canine = { isFurry: true, family: "Caninae" };

// const dataFromForm = {
//     email: "blueman@gmail.com",
//     password: "tobias123!",
//     username: "tfunke"
// }

// const newUser = { ...dataFromForm, id: 2345, isAdmin: false }


// rest 매개 변수
// function sum() {
//     return arguments.reduce((total, el) => total + el)
// }

// function sum(...nums) {
//     return nums.reduce((total, el) => total + el)
// }

// function raceResults(gold, silver, ...everyoneElse) {
//     console.log(`Gold medal goes to: ${gold}`)
//     console.log(`silver medal goes to: ${silver}`)
//     console.log(`Thanks to everyone else: ${everyoneElse}`)
// }


// 분해

// 배열 분해
// const scores = [929321, 899321, 883515, 773512, 543515, 246063, 111632]
// const highScore = scores[0];
// const secondHighScore = scores[1];

// const [gold, silver, bronze, ...everyoneElse] = scores;


// 객체 분해
const user = {
    email: "dongun16@naver.com",
    password: "scDoa242adf",
    firstName: "Dongun",
    lastName: "Lim",
    born: 1999,
    died: 2999,
    bio: "Harry maguir kick on the pogba head",
    city: "Jeonju",
    state: "JeinraBockdo"
}
const user2 = {
    email: "dongin@naver.com",
    firstName: "Dongin",
    lastName: "Lee",
    born: 1999,
    city: "Osaka",
    state: "Hokaido"
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// const { email, firstName, lastName, password, bio } = user;
// const { born: birthYear, died: deathyear } = user;
// const { city, state, died = "N/A" } = user2;


// 매개변수 분해
function fullName(user) {
    return `${user.firstName} ${user.lastName[0]}`
}
function fullName2(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName[0]}`
}

function fullName3({ firstName, lastName }) {
    return `${firstName} ${lastName[0]}`
}

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

const highMovies = movies.filter((movie) => movie.score >= 90)
const highMovies2 = movies.filter(({ score }) => score >= 90)

const favMovie = movies.map(movie => {
    return `${movie.title} (${movie.year}) is rated ${movie.score}`
})
const favMovie2 = movies.map(({ title, year, score }) => {
    return `${title} (${year}) is rated ${score}`
})