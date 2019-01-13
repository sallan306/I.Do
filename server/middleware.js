const express = require ('express');
const path = require('path');

module.exports.initMiddleWare = (app) => {

    //middleware - use initMiddleWare
    app.use(express.urlencoded({extended: false }));
    app.use(express.json());
    app.use(express.static(path.join(__dirname, '/public')));

    if (process.env.NODE_ENV === "production") {
        app.use(express.static("client/build"));
    }
}