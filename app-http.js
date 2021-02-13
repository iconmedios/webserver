//console.log('hola')
const http = require ('http');
//crear server request y response
http.createServer( (req, res) =>{

    console.log(req);
    res.writeHead(201, {'Content-Type': 'aplication/json'});
    const persona = {
        id:1,
        nombre: 'Jean',

    }

    res.write( JSON.stringify(persona));
    
    res.end();
}

)
// especificar el puerto
.listen(8090);

console.log('escuchando puerto', 8090 )

