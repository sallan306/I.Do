module.exports.isAuthenticated = (req, res, next) => {
    if(!req.isAuthenticated()){
        return false
    }
    
    console.log("ISAUTH.JS");
    next();
}