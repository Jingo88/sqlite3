var express = require('express');
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();
var cors = require('cors');
var app = express();
var db = new sqlite3.Database('petulance.db');

app.use(cors());
app.use(bodyParser.json({extended: false}));


app.get('/', function(req, res){
	db.all("SELECT * FROM people", function(err, rows){
		if(err) {throw err;}
		res.json(rows);
	});
});


app.listen(3000);
console.log("Listening on Port 3000");