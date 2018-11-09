'use strict'

//parametros rest y spread
//rest
function listadoFrutas(fruta1, fruta2, ...resto_frutas){
	console.log("fruta 1: ", fruta1);
	console.log("fruta 2: ", fruta2);
	console.log(resto_frutas);
}

listadoFrutas("naranja", "manzana", "sndia", "pera", "melon", "coco");

//spread
var frutas = ["naranja", "manzana"];
listadoFrutas(...frutas, "sandia", "pera", "melon", "coco");