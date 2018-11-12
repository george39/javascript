'use strict'

//dom Document Object Model
//Conseguir elementos con su id concreto 

function cambiaColor(color){
	caja.style.background = color;
}

//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");
caja.innerHTML = "TEXTO EN LA CAJA DESDE JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";

console.log(caja);


//*****************************************************************************
//Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

var valor;
for(valor in todosLosDivs){
	if (typeof todosLosDivs[valor].textContent == 'string') {
		var parrafo = document.createElement("p");
		var texto = document.createTextNode(todosLosDivs[valor].textContent);
		parrafo.append(texto);
		seccion.append(parrafo);
		//prepend es para insertar antes y append inserte despues
	}

}
seccion.append(hr);

//conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";

var div;
for(div in divsRojos){
	if (divsRojos[div].className == "rojo") {
		divsRojos[div].style.background = "red";
	}
}


//Para seleccionar muchos elementos existe el método querySelectorAll