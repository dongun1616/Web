const express = require('express');
const router = express.Router({ mergeParams: true }); //app.js 파일의 매개변수와 함께 reviews.js 파일의 매개변수가 병합된다.
const wrapAsync = require('../utils/wrapAsync');
const { reviewSchema } = require('../schemas.js')

const ExpressError = require('../utils/ExpressError');
const Campground = require('../models/campground')
const Review = require('../models/review')

// 유효성 검사 함수
const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}

router.post('', validateReview, wrapAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    req.flash('success', 'Success made a new review!')
    res.redirect(`/campgrounds/${campground._id}`);
}))

router.delete('/:reviewId', wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params; //구조분해
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } })
    await Review.findByIdAndDelete(req.params.reviewId);
    req.flash('success', 'Success deleted review!')
    res.redirect(`/campgrounds/${id}`)
}))

module.exports = router; //router 내보내기