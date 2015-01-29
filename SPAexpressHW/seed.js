var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('gang.db');

db.run("INSERT INTO people(name, hometown, sign) VALUES (?, ?, ?), (?, ?, ?), (?, ?, ?), (?, ?, ?)",
	'Jason', 'Woodside', 'Scorpio',
	'Matthew', 'Bayside', 'Scorpio',
	'Steven', 'Philly', 'Unknown',
	'Julia', 'Woodside', 'Libra',
	function(err){
		if(err){
			throw err;
		}
	}
);