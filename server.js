
var express = require('express');
var path = require("path");
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies

app.get('/', function (req, res) {
    res.sendFile(
        path.join(__dirname, '/src/views/index.html')
    );
});


app.listen(3000, function () { console.log('Status On port 3000'); });

