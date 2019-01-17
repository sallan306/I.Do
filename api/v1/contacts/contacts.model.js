
const mongoose = require('mongoose')


//TODO FINIALIZE AND DOUBLE CHECK DATATYPES
const Contact = mongoose.model('Contact', { 
    firstName: String,
    lastName: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    phone: String,
    email: String,
});

module.exports = Contact;