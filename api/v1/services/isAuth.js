module.exports = (req, res, next) => {
    if (req.user){next()}
    else (res.status(400).json({success:false, msg:"Unauthorized access."}));
}