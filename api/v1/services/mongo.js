const mongoose = require('mongoose');

module.exports.initMongo = () => {
    //initilizes connection to mongo db.
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test', {useNewUrlParser: true}).then(
        () => { console.log("Mongo: port 27017") },
        err => { console.log("Mongo: ERROR") });
};
