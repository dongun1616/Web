module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {  //로그인 여부 물어보는 메서드
        req.session.returnTo = req.originalUrl
        req.flash('error', 'You must be signed in first')
        return res.redirect('/login');
    }
    next();
}

module.exports.storeReturnTo = (req, res, next) => {
    if (req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
    }
    next();
}