'use strict'

//Evento load, para poner el script al inicio, en el head, fuera del html
window.addEventListener('load', () => {
		//Eventos del mouse
	function cambiarColor(){
		console.log("Me has dado clik");

		var bg = boton.style.background;

		if (bg == "green") {
			boton.style.background = "red";
		}else{
			boton.style.background = "green";
		}

		boton.style.padding = "10px";
		boton.style.border = "1px solid #ccc";

		return true;
	}

	var boton = document.querySelector("#boton");

	//Evento click
	boton.addEventListener('click', function(){
		cambiarColor();
		this.style.border = "10px solid black";
	});

	//Evento mouse over
	boton.addEventListener('mouseover', function(){
		boton.style.background = "yellow";
	});

	//Evento mouseout se ejecuta despues de pasar por encima con el mouese
	boton.addEventListener('mouseout', function(){
		boton.style.background = "#ccc";
	});

	//Evento fucus, cuando hacemos foco en el input
	var input = document.querySelector("#campo_nombre");
	input.addEventListener('focus', function(){
		console.log("[focus]Estas dentro del input");
	});

	//Evento blur, se ejecuta cuando salimos del input
	input.addEventListener('blur', function(){
		console.log("[blur]Estas fuera del input");
	});

	//Evento keydown, cuando esten precionando una tecla
	input.addEventListener('keydown', function(event){ //para capturar que tecla se esta pulsanod
		console.log("[keydown] pulsando esta tecla ", String.fromCharCode(event.keyCode));
	});

	//Evento keypress, despues de que presionan una tecla
	input.addEventListener('keypress', function(event){ //para capturar que tecla se esta pulsanod
		console.log("[keypress] Tecla presionada ", String.fromCharCode(event.keyCode));
	});

	//Evento keyup, captura el evento cuando se suelta una tecla
	input.addEventListener('keyup', function(event){ //para capturar que tecla se esta pulsanod
		console.log("[keyup] Tecla presionada ", String.fromCharCode(event.keyCode));
	});
});

