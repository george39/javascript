'use strict'

// operadores
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 + numero2;
alert("El resultado de la operacion es: "+operacion);


// tipos de datos
var numero_entero = 44;
var cadena_texto = 'hola "que" tal';
var verdadero_falso = false;

var numero_falso = "33";

//la funcion Number me convierte un string en un numero
//con parseInt me lo convierte en un entero
//con parseFloat me lo convierte a un flotante 

console.log(Number(numero_falso)+7);

//convertir entero a string 
console.log(String(numero_entero)+4);


//para ver el tipo de dato de una variable
console.log(typeof numero_entero);
