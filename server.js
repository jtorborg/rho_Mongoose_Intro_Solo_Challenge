const express = require('express');
//const express = require('express'); //not all browsers support const; it means you can't reassign variable; constant
const bodyParser = require('body-parser');
const path = require('path');
const people = require('./routes/people');
const connection = require('./connection');

var app = express();

connection.connect();
//start function (exports.connect = function (){}//require mongoose

//end functiion for db put in connection.js
//why do we need path? to send back the index file

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//general route for route url

//serving our static files
app.use(express.static('public'));

app.use('/people', people);

app.get('/', function(req, res) {

    res.sendFile(path.join(__dirname, 'public/views/index.html'));


});

app.listen(3000);
