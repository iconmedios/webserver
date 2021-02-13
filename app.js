const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;



// para renderizar tipo react o angular
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
//servir contenido estatico este es un middleware
app.use( express.static('public'));

 
// app.get('/', (req, res)=> {
//   res.send('Inicio')
// })

app.get('/', (req, res)=> {
  res.render('home', {
      nombre: 'Jean Luis',
      titulo: 'Curso de node'
  })
})
app.get('/elements', (req, res)=> {
  res.render('elements', {
      nombre: 'Elements',
      titulo: 'Curso de node'
  })
})

app.get('/generic', (req, res)=> {
    res.render('generic', {
        nombre: 'Generic',
        titulo: 'Curso de node'
    })
  })


 
app.listen(port, () => {
    console.log(`Escuchando puerto: http://localhost:${port}`)
  })