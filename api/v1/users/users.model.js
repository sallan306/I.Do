const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
mongoose.set('useFindAndModify', false)
const User = mongoose.model("User", {
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  color: Array,
  contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Contact" }]
});

User.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = User;
