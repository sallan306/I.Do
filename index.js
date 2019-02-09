const express = require('express');
var app  = express();
const path = require("path");
const PORT = process.env.PORT || 3003;

//MIDDLE WARE - require initMiddleWare
require('./server/middleware').initMiddleWare(app);

//routing - require initRouting
require('./api/v1').initRouting(app);

//Services - require initServices
require('./api/v1/services').initServices(app);

//Index
app.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

//Error Handling - require initErrorHandling

//Listening
app.listen(PORT, () => {
    console.log('listening port', PORT)
});