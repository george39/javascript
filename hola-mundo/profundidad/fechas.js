
var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();

var textoHora = `
	El año es: ${year}
	El mes es: ${mes}
	El dia es: ${dia}
	La hora es: ${hora}
	Los minutos son: ${minutos}

`;

console.log(textoHora);

//operaciones matematicas
console.log(Math.ceil(Math.random()*10000)); //ceil me quita los decimales