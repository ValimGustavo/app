const http = require('http');   // biblioteca padrao do node.js
const flickrapi = require('flickrapi');
const Flickr = require("flickrapi"),
    flickrOptions = {
      api_key: 'ee4ae78b19dee5b6fee38c2281efe97e',
      secret: '37c08a3855f43c30'
    };

Flickr.authenticate(flickrOptions, function(error, flickr) {
  // we can now use "flickr" as our API object
});

const server = http.createServer(); //cria uma servidor 

//para cada tipo de funcionalidade (request) a função qu será chamada
server.on('request', function(request, response){
    console.log("Inicio da requisição");
    const listPhotos = [];


    response.end();
});

server.listen(3000);
console.log("Servidor está rodando");