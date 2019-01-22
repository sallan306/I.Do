module.exports.isAuthenticated = (req, res, next) => {
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}