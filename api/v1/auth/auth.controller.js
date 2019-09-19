const db = require('../users/users.model');

const controller = {}
controller.AuthenticateLogin() = (req, res, next) => {
    console.log(req.body);
    const data = req.body
    db.findOne({email: data.email})
}

module.exports = controller;