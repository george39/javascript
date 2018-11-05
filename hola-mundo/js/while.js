'use strict'

//while
var year = 2018;

while(year <= 2051){
	//ejecuta esto
	console.log("estamos en el año "+year);
	//para parar el bucle
	if (year == 2000) {
		break;
	}
	year--;
}


//do while, primero ejecuta un bloque de instrucciones y luego evalua una condicion
var years = 30;

do{
	alert("solo cuando sea diferente a 20");
	years--;
}while(years > 25)
