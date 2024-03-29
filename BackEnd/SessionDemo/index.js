const express = require('express');
const app = express();
const session = require('express-session');

const sessionOptions = { secret: 'thisisnotgoodsecret', resave: false, saveUninitialized: false }  //노드창 오류 해결

app.use(session(sessionOptions))

app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }
    res.send(`You have viewed this page ${req.session.count} time`)
})

app.get('/register', (req, res) => {
    const { username = 'Anonymous' } = req.query;
    req.session.username = username;
    res.redirect('/greet')
})

app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`welcome back, ${username}`)
})

app.listen(3000, () => {
    console.log("Serving on port 3000");
})