$(document).ready(function(){
	//selector id
	$("#rojo").css("background","red")
	          .css("color", "white");

	$("#amarillo").css("background","yellow")
		 		  .css("color","green");

	$("#verde").css("background","green")
			   .css("color","white");


	//selectores de clases
	var mi_clase = $('.zebra').css("padding","5px");
	//console.log(mi_clase.eq(1)); con eq puedo seleccionar los elementos
	
	$('.sin_borde').click(function(){
		$(this).addClass('zebra');
	});	


	//selector de etiquetas
	var parrafos = $('p').css('cursor', 'pointer'); //cursor pointer me pone la manito 

	parrafos.click(function(){
		var that = $(this);
		 if (!that.hasClass('grande')) { //hasClass verifica si existe una clase
		 	that.addClass('grande');
		 }else{
		 	that.removeClass('grande');
		 }
	});	

	//selector de atributo
	$('[title="google"]').css('background', '#ccc');
	$('[title="facebook"]').css('background', 'blue'); 


	//otros
	//$('p, a').addClass('margen-superior');

	//para buscar en un arbol muy grande de html y no sabemos donde esta
	//parent() es para ir saliendo del arbol
	var busqueda = $("#caja .resaltado").eq(0).parent().parent().parent().find('[title="google"]');
	console.log(busqueda);  	 		            
});


