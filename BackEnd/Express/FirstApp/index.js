const express = require("express");
const app = express()


// app.use((req, res) => {
//     console.log("we got a new request!!")
//     res.send("Hello, we got your request!!!")
// })

app.get('/', (req, res) => {
    res.send('This is the home page')
})

app.get('/cats', (req, res) => {
    res.send('meow!')
})

app.get('/dogs', (req, res) => {
    res.send('woof!')
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`<h1>Search results for : ${q}</h1>`);
})

app.get('*', (req, res) => {
    res.send('i dont know that path!')
})




app.listen(3000, () => {
    console.log("listening on port 3000!!")
})