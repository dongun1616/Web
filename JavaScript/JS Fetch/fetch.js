// fetch("https://swapi.dev/api/people/1/") // fetch 함수가 프로미스를 반환한다. 위 url에 요청을 보냄
//     .then(res => {
//         console.log("resolved", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log("reject oh error", err)
//     })


// fetch("https://swapi.dev/api/people/1/")
//     .then(res => {
//         console.log("resolved", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log(data)
//         return fetch("https://swapi.dev/api/people/2/")
//     })
//     .then(res => {
//         console.log("second request resolved")
//         return res.json()
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log("reject oh error", err)
//     })


// 비동기 함수 사용시
const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1/")
        const data = await res.json()
        console.log(data);
        const res2 = await fetch("https://swapi.dev/api/people/2/")
        const data2 = await res2.json()
        console.log(data2);
    } catch (e) {
        console.log("error", e);
    }
}

loadStarWarsPeople();