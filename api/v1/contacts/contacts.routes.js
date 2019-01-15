const controller = require('./contacts.controller');
module.exports.initRoutes = (app) => {

    //create new contact
    app.post('/api/v1/contacts', (req,res,next) => {
        res.status(500).json({data:"not set up yet"});
    });

    //read contacts
    app.get('/api/v1/contacts', (req,res,next) => {
        res.status(200).json({data:"get contacts"});
    });

    //update contact

    //delete contact
}