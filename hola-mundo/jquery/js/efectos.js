$(document).ready(function(){

	var caja = $('#caja');
	//funcion para mostrar
	$('#mostrar').hide(); 
	$('#mostrar').click(function(){
		$(this).hide();
		$('#ocultar').show();
		//$('#caja').show('fast'); //normal para la velocidad de ocultamiento
		caja.fadeIn('slow');
		//$('#caja').fadeTo('slow', 0.8); slideDown
	});

	//funcion para ocultar
	$('#ocultar').click(function(){
		$(this).hide();
		$('#mostrar').show();
		//$('#caja').hide('fast');
		caja.fadeOut('slow', function(){
			console.log("cartel terminada");
		}); //funcion calvac para cuando termine la animacion
		//$('#caja').fadeTo('slow', 0.2); slideUp
	});

	//para hacer todo con un solo boton
	$('#todoenuno').click(function(){
		caja.slideToggle('fast'); //toggle, fadeTogel
	});

	//Mover la caja
	$('#animar').click(function(){
		caja.animate({
					  marginLeft: '500px',
					  fontSize: '40px',
					  height: '110px'
					  },'slow')
		.animate({
			borderRadius: '900px',
			marginTop: '80px'
		}, 'slow')
		.animate({
			borderRadius: '0px',
			marginLeft: '0px'
		}, 'slow')
		.animate({
			borderRadius: '100px',
			marginTop: '0px'
		}, 'slow')
		caja.animate({
					  marginLeft: '500px',
					  fontSize: '40px',
					  height: '110px'
					  },'slow');
	});
});



