'use strict'

var categorias = ['accion', 'terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

var cine = [categorias, peliculas];

var elemento = "";

do{
	elemento = prompt("Introduce tu pelicula");
	peliculas.push(elemento); //push es para introducir un elemento en el array

}while(elemento != "acabar");

//metodo pop para eliminar el ultimo elemento
peliculas.pop();

//eliminar un elemento concreto
var indice = peliculas.indexOf('Gran torino');

if (indice > -1) {
	peliculas.splice(indice, 1);  //metodo splice me permite borrar los indices que quiera hacia adelnate
}
console.log(peliculas);


//convertir array en un string
var peliculas_string = peliculas.join();
console.log(peliculas_string);


//convertir string en array
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(cadena_array);