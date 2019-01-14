const mongoose = require('mongoose');

module.exports.initMongo = () => {
    console.log("TODO: mongo connection here");
    mongoose.connect('mongodb://localhost:27017/ido')
}