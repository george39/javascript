'user strict'

// pruebas con let var
var numero = 40;
console.log(numero); // valor 40

if (true) {
	numero = 50; 
	console.log(numero);// valor 50
}

console.log(numero); // valor 50

//*****************************************************
//prueba con let
var texto = "curso js";
console.log(texto); //valor el mismo

if (true) {
	//se crea una variable local
	let texto = "curso laravel";
}

