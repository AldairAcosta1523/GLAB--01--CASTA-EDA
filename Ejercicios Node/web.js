var http = require('http'),
fs = require('fs');

http.createServer(function(solicitud, respuesta){
    fs.readFile('./templates/index.html', 'utf8', function(error,html){
        respuesta.write(html);
        respuesta.end();
    });
}).listen(8085);