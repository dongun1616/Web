const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/cats', (req, res) => {
    const cats = [
        'blue', 'rocket', 'monty', 'stephanie', 'winston'
    ]
    res.render('cats', { cats: cats })
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random', { rand: num });
})

app.listen(3000, () => {
    console.log("In server!!");
})