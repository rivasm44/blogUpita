/*Obtener una variable para obtener las funcionalidades de express*/
var express = require("express");
/*Configurar mi servidor*/
var app = express();//configuracion del servidor
app.listen(8081);
/*Imprimir en la consola del servidor*/
console.log("Servidor Levantado");
/*Despacha archivos estaticos*/
app.use("/", express.static(__dirname + "/vistas"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/imagenes", express.static(__dirname + "/imagenes"));
app.use("/videos", express.static(__dirname + "/videos"));
/*Hacemos que el servidor pueda leer los datos que recibe del cliente*/