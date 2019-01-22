const express = require ('express');
const path = require('path');
const passport = require('passport');
const expressSession = require('express-session');

module.exports.initMiddleWare = (app) => {

    //middleware - use initMiddleWare
    app.use(express.urlencoded({extended: false }));
    app.use(express.json());
    app.use(express.static(path.join(__dirname, '/public')));
    app.use(expressSession({secret: "bongo Cat",resave: true, saveUninitialized: false }))
    //passport
    app.use(passport.initialize());
    //app.use(passport.session({ secret: "bongo Cat", resave: true, saveUninitialize: true}));
    app.use(passport.session());

    if (process.env.NODE_ENV === "production") {
        app.use(express.static("client/build"));
    }
}