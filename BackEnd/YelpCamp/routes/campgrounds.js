const express = require('express');
const router = express.Router();
const campgrounds = require('../controllers/campgrounds')
const wrapAsync = require('../utils/wrapAsync');
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware')

const Campground = require('../models/campground')

router.route('/')
    .get(wrapAsync(campgrounds.index))  //index 라우트
    .post(isLoggedIn, validateCampground, wrapAsync(campgrounds.createCampground)) //create 라우트

router.get('/new', isLoggedIn, campgrounds.renderNewForm);  //new 폼

router.route('/:id')
    .get(wrapAsync(campgrounds.showCampground)) //show 라우트
    .put(isLoggedIn, isAuthor, validateCampground, wrapAsync(campgrounds.updateCampground)) //update 라우트
    .delete(isLoggedIn, isAuthor, wrapAsync(campgrounds.deleteCampground)) //delete 라우트

router.get('/:id/edit', isLoggedIn, isAuthor, wrapAsync(campgrounds.renderEditForm)) //edit 폼

module.exports = router;