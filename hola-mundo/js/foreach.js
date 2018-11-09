'use strict'


var lenguajes = new Array("php", "js", "python");

document.write("<h1>Lenguajes de programacion</h1>");
document.write("<ul>");

lenguajes.forEach((elemento, indice)=>{
	document.write("<li>"+indice+" - "+elemento+"</li>");
});

for(let lenguaje in lenguajes){
	document.write("<li>"+lenguajes[lenguaje]+"</li>");
}