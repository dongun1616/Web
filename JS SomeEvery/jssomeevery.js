const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

exams.every(score => score >= 75)
exams.some(score => score <= 95)

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

movies.every(y => y.year > 1980)
movies.some(y => y.year > 2000)


//some every연습 숫자 배열을 받아 짝수이면 true아니면 false
// const allEvens = (num) => (
//     num.every(even => even % 2 === 0)
// )
