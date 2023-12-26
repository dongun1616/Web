const express = require('express');
const app = express();
const path = require('path')

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


let comments = [
    {
        id: 1,
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: 2,
        username: 'Skyler',
        comment: 'I like to go serfing!'
    },
    {
        id: 3,
        username: 'Sk8erboi',
        comment: 'Plz delete your account Todd..'
    },
    {
        id: 4,
        username: 'onlysaywoof',
        comment: 'Woof woof woof'
    }
]

app.get('/comments', (req, res) => {
    res.render(`comments/index`, { comments })
})

app.get('/comments/new', (req, res) => {
    res.render(`comments/new`)
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === parseInt(id));
    res.render('comments/show', { comment });
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === parseInt(id));
    res.render('comments/edit', { comment });
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments')
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === parseInt(id));
    foundComment.comment = newCommentText;
    res.redirect('/comments')
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment })
    res.redirect('/comments');
})



app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body
    res.send(`Ok, here are your ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
    console.log("In server");
})