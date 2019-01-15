
const mongoose = require('mongoose')


//TODO FINIALIZE AND DOUBLE CHECK DATATYPES
const Contact = mongoose.model('Contact', { 
    firstName: String,
    lastName: String,
    address: Array,
    phone: Array,
    email: Array,
    birthDay: String,
    relation: String,
    note: String
});

module.exports = Contact;