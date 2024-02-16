const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser('thisismysecret'));  //비밀키 지정

app.get('/greet', (req, res) => {
    const { name = 'No-name' } = req.cookies;
    res.send(`hey there, ${name}`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'stevie chicks');
    res.cookie('animal', 'shrimp');
    res.send("ok sent a cookie");
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true }) //signed: true를 해줘 서명을 해야 쿠키를 불러올수 있다.
    res.send('ok signed your fruit cookie')
})

app.get('/verifyfruit', (req, res) => {
    console.log(req.cookies)
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})

app.listen(3000, () => {
    console.log("Serving on port 3000");
})