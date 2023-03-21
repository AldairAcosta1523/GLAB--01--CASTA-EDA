var http = require('http');
fs = require('fs');

http.createServer(function(req, res){

    if (req.url == '/templates/servicios.html') {

        fs.readFile('./templates/servicios.html', function(err, html){

            res.write(html);
            res.end();
    
        });

    }
    
    if (req.url == '/templates/nosotros.html') {

        fs.readFile('./templates/nosotros.html', function(err, html){

            res.write(html);
            res.end();
    
        });

    }

    if (req.url == '/templates/contactenos.html') {

        fs.readFile('./templates/contactenos.html', function(err, html){

            res.write(html);
            res.end();
    
        });

    }
    
    if (req.url == '/templates/catalogo_clientes.html') {

        fs.readFile('./templates/catalogo_clientes.html', function(err, html){

            res.write(html);
            res.end();
    
        });

    }
    
    if (req.url == '/') {

        fs.readFile('./templates/index.html', function(err, html){

            res.write(html);
            res.end();
    
        });

    }

}).listen(8085);