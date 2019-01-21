module.exports = (req, res, next) => {
    console.log('isAuth:');
    console.log(req.user);
    console.log(req.body);
    if (req.user){next}
    else (res.status(400).json({success:false, msg:"Unauthorized access."}));
}