$(document).ready(function(){
	//Eventos mouseOver y mouseOut
	var caja = $("#caja");
	/*
	caja.mouseover(function(){
		$(this).css('background', 'red');	
	});

	caja.mouseout(function(){
		$(this).css('background','green');
	});	
	*/

	function cambiaRojo(){
		$(this).css('background', 'red');	
	}

	function cambiaVerde(){
		$(this).css('background','green');
	}

	//Evento hover
	caja.hover(cambiaRojo, cambiaVerde);

	//Evento click
	caja.click(function(){
		$(this).css('background', 'blue')
			   .css('color', 'white');
	});

	//Doble click
	caja.dblclick(function(){
		$(this).css('background', 'pink')
			   .css('color', 'yellow');
	});

	//Evento focus y blur
	var nombre = $('#nombre');
	var datos = $('#datos');

	nombre.focus(function(){
		$(this).css('border', '2px solid green');
	});

	nombre.blur(function(){ //cuando salgo del foco 
		$(this).css('border', '1px solid #ccc');
		datos.text($(this).val()).show();
	});

	//Evento Mousedown y mouseup
	datos.mousedown(function(){
		$(this).css('border-color', 'gray');
	});

	datos.mouseup(function(){
		$(this).css('border-color', 'black');
	});

	//Mousemove, persigue el movimiento del mouse
	$(document).mousemove(function(){		
		$('body').css("cursor", "none"); //para ocultar el mouse
		$("#sigueme").css("left", event.clientX)
					 .css('top', event.clientY);

	});


});