const controller = require('./contacts.controller');
module.exports.initRoutes = (app) => {

    //create new contact
    app.post('/api/v1/contacts/:user/contact', (req,res,next) => {
        res.status(500).json({data:`eventually I'll put contact info into ${req.params.id}`});
    });

    //read ALL contacts
    app.get('/api/v1/contacts/:user/contact', (req,res,next) => {
        res.status(200).json({data: `get contacts belonging to.... ${req.params.id}`});
    });
    //read ONE contact
    app.get('/api/v1/contacts/:user/contact/:id' , (req, res, next) => {
        res.status(200).json({data: `get specific contact. user it belonds to ${req.params.user}, looking for ${req.params.id}`});
    });

    //update contact
    app.put('/api/v1/contacts/:user/contact/:id', (req,res,next) =>{
        res.status(200).json({data: `i want to update a contact for user: ${req.params.user} with id ${req.params.id}`})

    });

    //delete contact
    app.delete('/api/v1/contacts/:user/:id', (req, res , next) => {
        res.status(200).json({data: `I want to delete contact with the id: ${req.params.id}`});

    });
}