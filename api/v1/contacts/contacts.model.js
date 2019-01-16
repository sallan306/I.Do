
const mongoose = require('mongoose')


//TODO FINIALIZE AND DOUBLE CHECK DATATYPES
const Contact = mongoose.model('Contact', { 
    firstName: String,
    lastName: String,
    address: String,
    phone: String,
    email: String,
    birthDay: String,
    relation: String,
    note: String
});

module.exports = Contact;