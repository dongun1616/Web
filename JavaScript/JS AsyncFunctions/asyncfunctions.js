// async function hello() {
// }

// async 실습
// const sing = async () => {
//     throw "oh no, problem!"
//     return "la la la la"
// }

// sing()
//     .then(data => {
//         console.log("promise resolved", data)
//     })
//     .catch(err => {
//         console.log("promise reject", err)
//     })


const login = async (username, password) => {
    if (!username || !password) throw "missing credentials"
    if (password === "corgi") return "welcome"
    throw "invalid password"
}

login("asffsa", "corgi")
    .then(msg => {
        console.log("login", msg)
    })
    .catch(err => {
        console.log("error", err)
    })