'use strict'

//BOM Brouser Object Model, para manipular el navegador

//Mirar que tamaño tiene la pantalla del navegador
function getBom(){
	console.log(window.innerWidth);
	console.log(window.innerHeight);

	console.log(screen.width);
	console.log(screen.height);

	console.log(window.location);
}

//Redireccionar 
function redirect(url){
	window.location.href = url;
}

//Abrir nueva ventana pequeña
function abrirVentana(url){
	window.open(url, "", "width=400,height=300");
}

getBom();