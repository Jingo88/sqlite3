var express = require('express');
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();
var cors = require('cors');
var app = express();
var db = new sqlite3.Database('gang.db');

app.use(cors());
app.use(bodyParser.json({extended: false}));

//this will serve up your index.html and the script tag that is located inside the html
//as long as you put the main.js and css in public everything will load properly.
//we use this because we are using an html instead of an ejs file
app.use('/public', express.static(__dirname + '/public'));


app.get('/', function(req, res){
	db.all("SELECT * FROM people", function(err, rows){
		if(err) {throw err;}
		res.json(rows);
	});
});

app.post('/person', function(req, res){
	var name = req.body.name;
	var hometown = req.body.hometown;
	var sign = req.body.sign;

	db.run("INSERT INTO people (name, hometown, sign) VALUES (?, ?, ?)", name, hometown, sign, function(err){
	
		if(err) {throw err;}
		var id = this.lastID;
		
		db.get("SELECT * FROM people WHERE id = ?", id, function(err, row){
			if(err) {throw err;}
				res.json(row);
		});
	})
});

app.listen(3000);
console.log("Listening on Port 3000");









