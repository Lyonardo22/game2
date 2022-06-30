const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

const juegos = [
    {id:1, nombre: 'Carlos Acevedo', posicion: 'Defensa', edad: '26',},
    {id:2, nombre: 'Hector Acosta', posicion: 'Defensa', edad: '30',},
    {id:3, nombre: 'Saul Acosta', posicion: 'Delantero', edad: '31',},
    {id:4, nombre: 'Francisco Javier', posicion: 'Volante', edad: '34',},
    {id:5, nombre: 'Milton Micheli', posicion: 'Arquero', edad: '38',},
    {id:6, nombre: 'Erick Germain', posicion: 'Defensa', edad: '25',},
];

app.get('/',(req, res )=> {
    res.send('Api microservicios conectada');
})

app.get('/api/jugadores',(req,res)=>{
    res.send(juegos)
});

app.get('/api/jugadores/:id',(req ,res) =>{
    const game = juegos.find(c => c.id === parseInt(req.params.id));
    if(!game) return res.status(404).send('Jugador no encontrado');
    else res.json(game);
});



app.listen(PORT,()=>console.log(`funcionando en el puerto ${PORT}`));
