const express = require("express");
const server = express();
const productsRoute = require('./routes/productsRoute');
const usersRoute = require('./routes/usersRoute');
const ordersRoute = require ('./routes/ordersRoute');
// const multer = require (multer)//Para subir las imagenes

server.use(express.json());

server.use(productsRoute);
server.use(usersRoute);
server.use(ordersRoute);


  server.listen(3000, () => {
    console.log("Servidor iniciado ...");
});