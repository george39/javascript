'use strict';

//jsonplaceholder.typicode.com ó reqres.in para hacer pruebas
//Fetch (sustituto ajax) y peticiones a servicios / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");

	getUsuarios()
		.then(data => data.json())
		.then(users => {
			listadoUsuarios(users.data);

			return getJanet();
		})
		.then(data => data.json())
		.then(janet => {
			mostrarJanet(janet.data);

			return getInfo();

	})
		/*
	.catch(error => {
			alert("Error en las peticiones"); //como capturar un error en una promesa
		});	*/

	.then(data =>{
		console.log(data);
	});

function getUsuarios(){
	return fetch('https://reqres.in/api/users');
}	

function getJanet(){
	return fetch('https://reqres.in/api/users/2');
}

function getInfo(){
	var profesor = {
		nombre: 'Jorge',
		apellodos: 'Isaza',
		url: 'https://victorroblesweb.es'
	};

	return new Promise((resolve, reject) => {
		var profesor_string = JSON.stringify(profesor);

		if (typeof profesor_string != 'string') return reject('error');

		return resolve(profesor_string);
	});
}

	//buscar un usuario en concreto
function listadoUsuarios(usuarios){
	usuarios.map((user, indice) => {
			let nombre = document.createElement('h3');

			nombre.innerHTML = indice + '. ' + user.first_name +" " + user.last_name;
			div_usuarios.appendChild(nombre);

			document.querySelector(".loading").style.display = 'none';
		});
}	


function mostrarJanet(user){
	
			let nombre = document.createElement('h4');
			let avatar = document.createElement('img');

			nombre.innerHTML = '. ' + user.first_name +" " + user.last_name;
			avatar.src = user.avatar;
			avatar.width = '100';

			div_janet.appendChild(nombre);
			div_janet.appendChild(avatar);

			document.querySelector("#janet .loading").style.display = 'none';
}	