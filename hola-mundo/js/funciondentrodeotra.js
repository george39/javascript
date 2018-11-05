'use strict'
//funciones 
//una funcion es una agrupacion reutilizable de un conjunto de instrucciones
function porConsola(numero1, numero2){
	console.log("suma "+(numero1+numero2));
	console.log("resta "+(numero1-numero2));
	console.log("multiplicacion "+(numero1*numero2));
	console.log("division "+(numero1/numero2));
}

function porPantalla(numero1,numero2){
	document.write("suma "+(numero1+numero2)+"<br/>");
	document.write("resta "+(numero1-numero2)+"<br/>");
	document.write("multiplicacion "+(numero1*numero2)+"<br/>");
	document.write("division "+(numero1/numero2)+"<br/>");
}

function calculadora(numero1, numero2, mostrar = false){ //parametro opcional
	if (mostrar == false) {
		porConsola(numero1, numero2);
	}else{
		porPantalla(numero1, numero2)
	}
	
	return true;
}

calculadora(1,4);
calculadora(2,5, true);

//console.log(calculadora(), calculadora());
for (var i = 1; i <= 10; i++) {
	calculadora(i, 8)
}