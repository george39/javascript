'use strict'

//busquedas en un texto
var texto1 = "bienvenido al curso de js";
var texto2 = "es muy bueno";

//var busqueda = texto1.indexOf("curso");
//var busqueda = texto1.search("curso");

//me devuelve un array//var busqueda = texto1.match("curso");
//para hacer una busqueda blobal //var busqueda = texto1.match(/curso/g);

//me saca desde el caracter 14, 5 lentras en adelante//var busqueda = texto1.substr(14,5);

//me saca un caracter especifico//var busqueda = texto1.charAt(44);

//me busca un texto que inicia con el que yo le indico//var busqueda = texto1.startsWith("Bienvenido");

//me busca un texto que termine con el indicado//var busqueda = texto1.endsWith("curso de js");

//me busca una palabra y me dice false o true//var busqueda = texto1.includes("curso");

//me saca la ultima aparicion de una palabra
var busqueda = texto1.indexOf("curso");
console.log(busqueda);