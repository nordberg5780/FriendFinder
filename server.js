// Dependencies
// =============================================================
var express = require('express');
var path = require('path');


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;


// Static files
app.use(express.static('app/public'));


// Router
require('./app/routing/apiRoutes.js')(app, path);
require('./app/routing/htmlRoutes.js')(app, path);


app.listen(PORT, function() {
    console.log("I\'m listening... on port " + PORT);
})