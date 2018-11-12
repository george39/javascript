'use strict'

window.addEventListener('load', function(){
	console.log("Dom cargado");

	var formulario = document.querySelector("#formulario");
	var box_dashed = document.querySelector(".dashed");
	box_dashed.style.display = "none";

	formulario.addEventListener('submit', function(){
		console.log("Evento submit capturado");

		var nombre = document.querySelector("#nombre").value;
		var apellidos = document.querySelector("#apellidos").value;
		var edad = parseInt(document.querySelector("#edad").value);

		// trim() es para que no contenga espacios ni por delante no por detras
		if (nombre.trim() == null || nombre.trim().length == 0) {
			alert("El nombre no es valido ");
			document.querySelector("#error_nombre").innerHTML = "El nombre no es valido";
			return false;
		}else{
			document.querySelector("#error_nombre").style.display = "none";
		}

		if (apellidos.trim() == null || apellidos.trim().length == 0) {
			alert("Los apellidos no son validos ");
			return false;
		}

		if (edad == null || edad <= 0 || isNaN(edad)) {
			alert("La edad no es valida ");
			return false;
		}

		box_dashed.style.display = "block";

		var datos_usuario = [nombre, apellidos, edad];

		var indice;
		for(indice in datos_usuario){
			var parrafo = document.createElement("p");
			parrafo.append(datos_usuario[indice]);
			box_dashed.append(parrafo);
		}

		console.log(nombre, apellidos, edad);
	});
});