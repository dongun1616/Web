const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

const Product = require('./models/product');
const Farm = require('./models/farm');
const categories = ['fruit', 'vegetable', 'dairy'];

mongoose.connect('mongodb://127.0.0.1:27017/farmStand2')
    .then(() => {
        console.log("Mongo connection open!")
    })
    .catch(err => {
        console.log("oh no mongo connection error!!")
        console.log(err);
    })

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// Farm 라우트

app.get('/farms', async (req, res) => {  //index 페이지
    const allFarms = await Farm.find({})
    res.render('farms/index', { allFarms })
})

app.get('/farms/new', (req, res) => {  //new 페이지
    res.render('farms/new')
})

app.post('/farms', async (req, res) => {  //new 페이지
    const newFarm = new Farm(req.body)
    await newFarm.save();
    res.redirect('/farms')
})

app.get('/farms/:id', async (req, res) => {  //show 페이지
    // const { id } = req.params;
    const farm = await Farm.findById(req.params.id)
    res.render('farms/show', { farm });
})

app.get('/farms/:id/products/new', (req, res) => {  // farm에 포함된 제품 생성페이지
    const { id } = req.params;
    res.render('products/new', { categories, id });
})

// Product 라우트

app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category })
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }
})

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body)
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('products/show', { product })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('products/edit', { product, categories })
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
    res.redirect(`/products/${product._id}`)
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id)
    res.redirect('/products')
})

app.listen(3000, () => {
    console.log("App it listening on port 3000");
})