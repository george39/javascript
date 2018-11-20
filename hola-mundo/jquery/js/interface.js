$(document).ready(function(){
	//para mover un elemento por la pagina
	$('.elemento').draggable();

	//para redimencionar un elemento
	$('.elemento').resizable(); 

	//seleccionar elementos
	//$('.lista-seleccionable').selectable();

	//ordenar elementos
	$('.lista-seleccionable').sortable({
		update: function(event, ui){
			console.log('ha cambiado la lista');
		}
	});

	//Drop
	$('#elemento-movido').draggable();
	$('#area').droppable({
		drop: function(){
			console.log('has soltado algo dentro');
		}
	});

	//Efectos
	$('#mostrar').click(function(){
		//$('.caja-efectos').fadeToggle();
		//$('.caja-efectos').toggle('explode');
		//$('.caja-efectos').effect('explode');
		//$('.caja-efectos').toggle('blind');
		//$('.caja-efectos').toggle('slide');
		//$('.caja-efectos').toggle('drop');
		//$('.caja-efectos').toggle('fold');
		//$('.caja-efectos').toggle('puff');
		//$('.caja-efectos').toggle('scale');
		$('.caja-efectos').toggle('shake', 4000);
	});

	//Tooltip
	$(document).tooltip();

	//Dialog
	$('#lanzar-popup').click(function(){
		$('#popup').dialog();
	});

	//Datepiker
	$('#calendario').datepicker();


	//Tabs o pestañas
	$('#pestanas').tabs();
	
});