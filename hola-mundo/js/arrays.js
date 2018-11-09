'use strict'

//arrays, arreglos, matrices--coleccion de datos que puede tener una variable
var nombre = "Jorge Ivan";
var nombres = ["Jorge ivan", "Angelica", "Mafe", 41, true];

//array en forma de objeto
var lenguajes = new Array("php", "js", "python");
console.log(nombres[2]);
//console.log(lenguajes);

//longitud de un array
console.log(nombres.length);

//sacar un indice especifico
/*
var elemento = parseInt(prompt("que elemento quiere", 0));
if (elemento >= nombres.length) {
	alert("Introduce un numero menor que " + nombres.length);
}else{
	alert("el usuario seleccionado es: "+nombres[elemento]);
}
*/

//mostrar todos los elementos de un array
document.write("<h1>Lenguajes de programacion</h1>");
document.write("<ul>");

for (var i = 0; i <  lenguajes.length; i++) {
	document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>");