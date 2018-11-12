'use strict'

//localstorage
//comprobar si el navegador esta disponible con el localstorage
if (typeof(Storage) !== 'undefine'){
	console.log("localstorage disponible");
}else{
	console.log("Incompatible con localstorage");
}


//Guardar datos en el localstorage
localStorage.setItem("titulo", "Curso de javascript");

//Recuperar un elemento del localstorage
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar objetos en localstorage
var usuario = {
	nombre: "Jorge Isaza",
	email: "jorge@jorge.com",
	direccion: "frailes"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar un objeto del localstorage
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#datos").append(" "+userjs.nombre+" "+userjs.email);

//borrar informacion del localstorage
localStorage.clear();
