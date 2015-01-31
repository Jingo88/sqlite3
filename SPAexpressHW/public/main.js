var ul = document.getElementById('wholeGang');
var newPersonButton = document.getElementById('newPerson');

var everybody = function(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://localhost:3000/');

	xhr.addEventListener('load', function(){
		var people = JSON.parse(xhr.responseText);
		

		people.forEach(function(person){
			var li=document.createElement('li');
			li.innerText = person.name+" / "+person.hometown+" / "+person.sign
			ul.appendChild(li);
		});
	});
	xhr.send();
};

everybody();


newPersonButton.addEventListener('click', function(){
	var newName = document.getElementById('name');
	var newHome = document.getElementById('hometown');
	var newSign = document.getElementById('sign');

	var xhr= new XMLHttpRequest();

	xhr.open('POST', 'http://localhost:3000/person');

	xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	xhr.addEventListener('load', function(){
		var returnedPerson = JSON.parse(xhr.responseText);
		var li=document.createElement('li');
		li.innerText = returnedPerson.name+" / "+returnedPerson.hometown+" / "+returnedPerson.sign
		ul.appendChild(li);

		newName.value = '';
		newHome.value = '';
		newSign.value = '';
	})
	var newPerson = {name: newName.value, hometown: newHome.value, sign: newSign.value};
	xhr.send(JSON.stringify(newPerson));
});
