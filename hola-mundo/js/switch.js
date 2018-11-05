'use strict'

//switch
var edad = 40;
var imprime = "";

switch(edad){
	case 18:
		imprime = "acabas de cumplir la mayoria de eadad";
	break;
	
	case 25:
		imprime = "ya eres un adulto";
	break;
	
	case 40:
		imprime = "crisis de los 40";
	break;
	
	case 75:
		imprime = "ya eres un anciano";
	break;
	
	default :				
		imprime = "edad neutra";
	break;	
}
console.log(imprime);	
