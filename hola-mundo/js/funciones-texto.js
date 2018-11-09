'use strict'

//transformacion de textos

var numero = 444;
var texto1 = "bienvenido al curso de javascript";
var texto2 = "muy buen curso";

var dato = numero.toString();
	dato = texto1.toLowerCase(); //convertir texto en minusculas
	dato = texto2.toUpperCase(); //convertir texto a mayusculasS
console.log(dato);

//calcular longitud
var nombre = "Jorge Ivan";
	nombre = ["hola", "hola"];
console.log(nombre.length);


//concatenar 
//var textoTotal = texto1+ " "+texto2;

var textoTotal = texto1.concat(" "+texto2);
console.log(textoTotal);