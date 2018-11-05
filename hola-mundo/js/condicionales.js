'use strict'
//condicional if
var edad = 34;
var nombre = 'Jorge';
if (edad >= 18) {
	console.log(nombre+" tiene "+edad+" años, es mayor de edad");

	if (edad <= 33) {
		console.log("eres milenial");
	}else if(edad>=70){  //else if pone al lado
		console.log("eres anciano");
	}else{
		console.log("ya no eres milenial");
	}
}else{
	console.log(nombre+" es menor de edad")
}
