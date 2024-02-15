const express = require('express');
const router = express.Router();

router.use((req, res, next) => {  //admin라우트만 ?Admin=true가 없으면 실행되지 않는다.
    if (req.query.isAdmin) {
        next();
    }
    res.send("sorry not an admin")
})

router.get('/topsecret', (req, res) => {
    res.send('this it secret')
})
router.get('/deleteeverything', (req, res) => {
    res.send('delete all')
})

module.exports = router;