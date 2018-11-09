'use strict'

var texto1 = "  bienvenido al curso de javascript";
var texto2 = "es muy bueno";

//me reemplaza el primer texto por el segundo
//var busqueda = texto1.replace("javascript", "synfony");

//me separa un string despues del caracter que yo le indico
//var busqueda = texto1.slice(14, 20);

//me guarda el texto en un array con las palabras separadas
//var busqueda = texto1.split(" ");

//me guarda el texto en un array todo junto
//var busqueda = texto1.split();

//me borra o quita los espacios que hay por delante y por detras 
var busqueda = texto1.trim();
console.log(busqueda);
