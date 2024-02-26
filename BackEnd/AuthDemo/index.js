const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.connect('mongodb://localhost:27017/authDemo')
    .then(() => {
        console.log("Mongo connection open!")
    })
    .catch(err => {
        console.log("oh no mongo connection error!!")
        console.log(err);
    })

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }))
app.use(session({ secret: 'notagoodsecret' }))

const requireLogin = (req, res, next) => {  // 세션에 로그인지 확인하는 함수
    if (!req.session.user_id) {
        return res.redirect('/login');
    }
    next();
}

app.get('/', (req, res) => {
    res.send('This is the Home Page')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    const { password, username } = req.body;  // 구조분해
    const hash = await bcrypt.hash(password, 12)  // 암호와 해시 횟수를 전달
    const user = new User({
        username,
        password: hash
    })
    await user.save();  // 데이터베이스에 저장
    req.session.user_id = user._id;
    res.redirect('/')
})

app.get('/login', (req, res) => {
    res.render('login')
})
app.post('/login', async (req, res) => {
    const { username, password } = req.body; // 구조분해
    const foundUser = await User.findAndValidate(username, password)
    if (validPassword) {
        req.session.user_id = foundUser._id; // 로그인 성공시 세션에 ID 저장
        res.redirect('/secret')  //로그인 성공
    } else {
        res.redirect('/login') //로그인 실패
    }
})

app.post('/logout', (req, res) => {
    // req.session.user_id = null; //세션 한 특성만 null로 설정
    req.session.destroy();  // 세션 전체를 파기
    res.redirect('/login');
})

app.get('/secret', requireLogin, (req, res) => {
    res.render('secret')
})
app.get('/topsecret', requireLogin, (req, res) => {
    res.send('Top Secret!!')
})

app.listen(3000, () => {
    console.log('Serving on port 3000');
})