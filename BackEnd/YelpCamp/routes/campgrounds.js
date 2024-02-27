const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync');
const { campgroundSchema } = require('../schemas.js')
const { isLoggedIn } = require('../middleware')

const ExpressError = require('../utils/ExpressError');
const Campground = require('../models/campground')

// 유효성 검사 함수
const validateCampground = (req, res, next) => {
    const { error } = campgroundSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}


router.get('/', wrapAsync(async (req, res) => {
    const campgrounds = await Campground.find({})
    res.render('campgrounds/index', { campgrounds })
}))

router.get('/new', isLoggedIn, (req, res) => {
    res.render('campgrounds/new')
})

router.post('/', isLoggedIn, validateCampground, wrapAsync(async (req, res, next) => {
    //if(!req.body.campground) throw new ExpressError('Invalid Campground Data', 400);
    const campground = new Campground(req.body.campground)
    await campground.save();
    req.flash('success', 'Success made a new campground!');
    res.redirect(`/campgrounds/${campground._id}`);
}))

router.get('/:id', wrapAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id).populate('reviews')
    if (!campground) {
        req.flash('error', 'Cannot find that campground!')
        res.redirect('/campgrounds')
    }
    res.render('campgrounds/show', { campground });
}))

router.get('/:id/edit', isLoggedIn, wrapAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id)
    if (!campground) {
        req.flash('error', 'Cannot find that campground!');
        return res.redirect('/campgrounds')
    }
    res.render('campgrounds/edit', { campground });
}))

router.put('/:id', isLoggedIn, validateCampground, wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndUpdate(id, { ...req.body.campground }, { new: true });
    req.flash('success', 'Success updated campground!')
    res.redirect(`/campgrounds/${id}`);
}))

router.delete('/:id', isLoggedIn, wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash('success', 'Success deleted campground!')
    res.redirect('/campgrounds');
}))

module.exports = router;