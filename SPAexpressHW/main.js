var everybody = function(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://localhost:3000/');

	xhr.addEventListener('load', function(){
		var people = JSON.parse(xhr.responseText);
		people.forEach(function(person){
			listPerson(person);
		});
	});
	xhr.send();
}

var listPerson = function(person){
	var li = document.createElement('li');
	bulletPerson(li, person);
	var ul = document.getElementById('wholeGang');
	ul.appendChild(li);
}