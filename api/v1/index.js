module.exports.initRouting = (app)=>{
    require('./users/users.routes').initRoutes(app);
    require('./contacts/contacts.routes').initRoutes(app);
}