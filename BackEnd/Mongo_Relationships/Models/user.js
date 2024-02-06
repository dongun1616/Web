const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDemo')
    .then(() => {
        console.log("Mongo connection open!")
    })
    .catch(err => {
        console.log("oh no mongo connection error!!")
        console.log(err);
    })

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: { _id: false },
            street: String,
            city: String,
            state: String,
            country: String,
        }
    ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter',
    })
    u.addresses.push({
        street: '123 Sesame St.',
        city: 'New York',
        state: 'Ny',
        country: 'USA'
    })
    const res = await u.save();
    console.log(res);
}

const addAddress = async (_id) => {
    const user = await User.findById(_id);
    user.addresses.push({
        street: '99 3rd St.',
        city: 'New York',
        state: 'Ny',
        country: 'USA'
    })
    const res = await user.save();
    console.log(res);
}

addAddress('65c2022691b66f204ea18655')