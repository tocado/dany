var ruta = {};
var procesarRuta = function () {
	console.log("detectado cambio de hash");
	var rutastr = location.hash.substr(1,location.hash.length);
	ruta.ejecutarRuta(rutastr);
}
ruta.ejecutarRuta = function (r) {
	var metodo = r.split("/");
	if (metodo[0] in ruta) {
		console.log("ejecutando ruta " + metodo[0]);
		ruta[metodo[0]]();
	} else {
		console.log("no se encontro la ruta " + metodo[0]);
		return false;
	}
};
ruta.inicio = function () {
	location.hash="#cargarCompra";
};
ruta.login = function () {
    $('#menu-registracion').hide();
    $("#menu-registracion").removeClass("menu menu-scroll");	
	cerrarMenu();	
	prenderLogin();
};
ruta.cargarCompra = function () {
    $('#menu-registracion').hide();
    $("#menu-registracion").removeClass("menu menu-scroll");	
	cerrarMenu();
	apagarLogin();
	dibujarPantallaCarga();
};
ruta.listadoClientes = function () {
    $('#menu-registracion').hide();
    $("#menu-registracion").removeClass("menu menu-scroll");
	cerrarMenu();
	apagarLogin();
	traerClientes(dibujarClientes);
};

ruta.nuevoCliente = function () {
    $('#menu-registracion').hide();
    $("#menu-registracion").removeClass("menu menu-scroll");
	cerrarMenu();
	apagarLogin();
	editarCliente({});
};


window.onpopstate = procesarRuta;