// axios.get("https://swapi.dev/api/people/1/")
//     .then(res => {
//         console.log("response:", res)
//     })
//     .catch(err => {
//         console.log("error", err)
//     })


const getStarWarPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
        console.log(res.data);
    } catch (e) {
        console.log("error", e)
    }
}

// getStarWarPerson(1);

// 조크 생성하기
const btn = document.querySelector('button')
const jokes = document.querySelector("#jokes")

const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    const newLi = document.createElement('li')
    newLi.append(jokeText)
    jokes.append(newLi)
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get("https://icanhazdadjoke.com/", config)
        return res.data.joke
    } catch (e) {
        return "No joke sorry.."
    }

}

btn.addEventListener('click', addNewJoke);