const express = require('express');
const router = express.Router({ mergeParams: true }); //app.js 파일의 매개변수와 함께 reviews.js 파일의 매개변수가 병합된다.
const reviews = require('../controllers/reviews');
const wrapAsync = require('../utils/wrapAsync');
const { isLoggedIn, validateReview, isReviewAuthor } = require('../middleware')

const Campground = require('../models/campground')
const Review = require('../models/review')



router.post('', isLoggedIn, validateReview, wrapAsync(reviews.createReview)) //create 라우트

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, wrapAsync(reviews.deleteReview)) //delete 라우트

module.exports = router; //router 내보내기