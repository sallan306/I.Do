
const mongoose = require('mongoose')
const bcrypt = require ('bcrypt');

const User = mongoose.model('User', { 
    email: String,
    password: String
});

User.prototype.validPassword = function(password){
    
    return bcrypt.compareSync(password, this.password);
  };

module.exports = User;