const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log("i love dogs!");
    next();
})

const verifyPassword = ((req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    res.send('Sorry you need a password')
})

app.get('/', (req, res) => {
    res.send('Home page')
})
app.get('/dogs', (req, res) => {
    res.send('Woof Woof')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('my secret is : cool')
})

app.use((req, res) => {
    res.status(404).send("not found")  //마지막 app.use 모든 미들웨어가 지난후 실행해 찾을수 없다는걸 알림
})

app.listen(3000, () => {
    console.log("App is running on 3000 port");
})