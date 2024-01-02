const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("Mongo connection open!")
    })
    .catch(err => {
        console.log("oh no mongo connection error!!")
        console.log(err);
    })

app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send('Woof!');
})

app.listen(3000, () => {
    console.log("App it listening on port 3000");
})