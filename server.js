var express = require("express");
/*Configurar mi servidor*/
var app = express();//configuracion del servidor
/*hacemos que la pagina sea dinamica*/
var consolidate = require("consolidate");//libreria que nos sirve para configurar vistas
var dust = require("dustjs-linkedin");//motor para crear vistas dinamicas
/*Obtener una variable para obtener las funcionalidades de express*/
app.listen(8081);
/*Imprimir en la consola del servidor*/
console.log("Servidor Levantado");
/*Despacha archivos estaticos*/
/*app.use("/", express.static(__dirname + "/vistas"));*/
app.use("/css", express.static(__dirname + "/css"));
app.use("/imagenes", express.static(__dirname + "/imagenes"));
app.use("/videos", express.static(__dirname + "/videos"));
/*Hacemos que el servidor pueda leer los datos que recibe del cliente*/
/*Configurar nuestro motor de vistas*/
app.set("view engine", "dust");//Nuestras vistas tienen una extencion .DUST
app.engine("dust", consolidate.dust);//Aqui estoy indicando el engine que voy a buscar 
//indicamos la carpeta que contiene las vistas
app.set("views", __dirname + "/vistas");
/*Hacemos que el servidor pueda leer los datos que recibe del cliente*/
app.use(express.urlencoded());
/*Hacemos que elservidor responda a peticiones GET*/
app.get("/index", function(request, response){
	/*logica de como responder a las peticiones*/
	response.render("index");
});
/*responder a una peticion POST*/	
app.post("/suscribete", function(request, response){
	console.log("Email: " + request.body.email);
	response.render("suscrito",{
		asunto: "Yo soy el servidor",
		email:request.body.email
	});
});
