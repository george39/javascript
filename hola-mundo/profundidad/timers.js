'use strict'

window.addEventListener('load', function(){
	//Timers
	//setTimeout se ejecuta solo una ves
	function intervalo(){
		var tiempo = setInterval(function(){
		console.log("Set interval ejecutado");

		var encabezado = document.querySelector("h1");
		if (encabezado.style.fontSize == "50px") {
			encabezado.style.fontSize = "30px";
		}else{
			encabezado.style.fontSize = "50px";
		}
		
		}, 1000);
		return tiempo;
	}
	var tiempo = intervalo();

	//para parar la ejecucion
	var stop = document.querySelector("#stop");

	stop.addEventListener("click", function(){
		alert("Has parado el bucle");
		clearInterval(tiempo);
	});

	//iniciar la ejecucion de nuevo
	var start = document.querySelector("#start");


	start.addEventListener("click", function(){
		alert("Has iniciado el bucle");
		intervalo();
	});
});