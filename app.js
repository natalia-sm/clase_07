const http = require('http');

const fs = require('fs');

const servidor = http.createServer((req, res) => {
    
    // es indispensable que una conexion HTTP termine la escritura del socket con Socket.end

    res.setHeader('Content-Type', 'text/html'); 
    res.statusCode = 200; //por defecto es 200

    /*tambien puedo: 
        res.writeHead(200, 'OK', {'content-type: 'text-html'}); 
    */
    

    //res.end('<h1>Hola Mundo!</h1>');
    fs.readFile(`${__dirname}/video.mp4`, (err, data) => {
        if (err) {
            console.log(err);
            res.writeHead(500, 'Internal Server Error');
            res.end(err.message);
        } else {
            res.writeHead(200, {'Content-Type': 'video/mp4'})
            res.end(data);
        }
    })


    /*
        Content-Types servidor -> cliente
        text/html
        text/plain
        application/json
        application/javascript
        text/css
        image/jpeg
        image/gif
        image/png
        video/mp4
        video/webm
        audio/ogg
        audio/mp3

        Content-Types cliente -> servidor
        -todos los anteriores aplican-
        multipart/formdata (datos que te manda un formulario - post)
        application/x-www-url-encoded (se usa cuando el formulario manda cosas por url - get)
    */


});

servidor.listen(8000);






/**
 * Capas:

 - Aplicacion = HTTP / SSH / FTP / STMP / etc ...
 - ...
 - Transporte = TCP
 - ...
 - Red        = IP4/IP6
 **/