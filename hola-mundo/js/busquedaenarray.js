'use strict'

var lenguajes = new Array("php", "js", "python");

//me muestra el lenguaje
var busqueda = lenguajes.find(lenguaje => lenguaje == "php");
console.log(busqueda);

//me muestra el indice
var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "php");

var precios = [10, 20, 50, 80];
var busqueda = precios.some(precio => precio > 50);