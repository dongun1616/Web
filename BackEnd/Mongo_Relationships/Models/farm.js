const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDemo')
    .then(() => {
        console.log("Mongo connection open!")
    })
    .catch(err => {
        console.log("oh no mongo connection error!!")
        console.log(err);
    })

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
})

const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] //ref옵션을 통해서 Mongoose에게 채우기 작업 시 사용할 모델을 알려준다.
})

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

const makeFarm = async () => {
    const farm = new Farm({ name: 'Full Belly Farms', city: 'Guinda, CA' })
    const melon = await Product.findOne({ name: 'Goddes Melon' })
    farm.products.push(melon);
    await farm.save()
    console.log(farm)
}
// makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Full Belly Farms' });
    const Watermelon = await Product.findOne({ name: 'Sugar Baby Watermelon' });
    farm.products.push(Watermelon);
    await farm.save();
    console.log(farm);
}
// addProduct();

Farm.findOne({ name: 'Full Belly Farms' })
    .populate('products')
    .then(farm => console.log(farm))

// Product.insertMany([
//     { name: 'Goddes Melon', price: 4.99, season: 'Summer' },
//     { name: 'Sugar Baby Watermelon', price: 5.99, season: 'Summer' },
//     { name: 'Asparagus', price: 3.99, season: 'Spring' }
// ])

