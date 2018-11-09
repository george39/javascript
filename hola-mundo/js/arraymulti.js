'use strict'

//arrays multidimensionales, son arrays dentro de otros arrays
var categorias = ['accion', 'terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

var cine = [categorias, peliculas];

console.log(cine[0][1]);
console.log(cine[1][2]);