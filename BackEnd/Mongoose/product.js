const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
})

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'Bike2', price: 299, categories: ['Cycling', 'Safety'], qty: { online: 4 }, size: 'M' });
bike.save()
    .then(data => {
        console.log("It worked!!")
        console.log(data)
    })
    .catch(err => {
        console.log("oh no error!!")
        console.log(err)
    })