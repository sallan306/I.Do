
const mongoose = require('mongoose')
const bcrypt = require ('bcrypt-nodejs');

const User = mongoose.model('User', {
    firstName: String,
    lastName: String,
    email: String,
    password: String
});

User.prototype.validPassword = function(password){
    
    return bcrypt.compareSync(password, this.password);
  };

module.exports = User;