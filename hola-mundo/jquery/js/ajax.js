$(document).ready(function(){
	//Load, para hacer una peticion a un servidor
	//$('#datos').load("https://reqres.in/");

	//Metodos get y post
	$.get("https://reqres.in/api/users", {page: 3}, function(response){
		response.data.forEach((element, index) => {
			$('#datos').append('<p>'+element.first_name+" " + element.last_name+"</p>");
		});
	});	

		

	$('#formulario').submit(function(e){
		e.preventDefault(); //para que no me redirija a otra pagina
		var usuario = {
			name: $('input[name="name"]').val(),
			web: $('input[name="web"]').val()
		};
		console.log(usuario);
/*
		$.post($(this).attr('action'), usuario, function(response){
			console.log(response);
		}).done(function(){
			alert('Usuario creado correctamente');
		});
*/		$.ajax({
			type: 'POST',
			url: $(this).attr('action'),
			data: usuario,
			beforeSend: function(){
				console.log('Enviando usuario');
			},
			success: function(response){
				console.log(response);
			},
			error: function(){
				console.log('A ocurrido un error');
			},
			timeout: 1000
		});

		return false;
	});
});