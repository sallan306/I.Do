const mongoose = require('mongoose');

module.exports.initMongo = () => {
<<<<<<< HEAD
    console.log("TODO: mongo connection here");
    mongoose.connect('mongodb://localhost:27017/ido')
}
=======
    //initilizes connection to mongo db.
    mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true}).then(
        () => { console.log("Mongo: port 27017") },
        err => { console.log("Mongo: ERROR") });
};
>>>>>>> 3e3ad5c6487a35d777a0ef39d2cba7104c278d9e
