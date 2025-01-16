const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//const { default: mongoose } = require('mongoose');

const app = express();

const productRouter = require('./routes/products');

const port = 3000;

dotenv.config();
mongoose.connect(process.env.MONGODB_URL).then( ()=> console.log('connected')).catch( (err)=> console.log(err) )

//app.get('/', (req,res) => res.send('Danna Tam') ); Tenemos la posibilidad de declarar una a una las rutas
//app.get('/buscar', (req,res) => res.send('Danna Tam') );  ... etcetera
//app.get('/insertar', (req,res) => res.send('Danna Tam') ); recordando que cada '/opcion' es una ruta que representa una accion deseada solicitada por el clinete desde la interfaz
//app.metodo('/rutaParaAccion', (solicitud, respuesta)=> Accion) //Donde los metodos responden al protocolo HTTP get (obtiene/muestra), post (envia), delete(borra), update(cambia un registro), patch(modica un aspecto)

app.use(express.json({ limit:'10mb' }) );
app.use(express.urlencoded({ limit:'10mb',extended:true }) );
app.use('/api/products',productRouter); //Esta es una altenrativa mas pulcra a declarar UNA A UNA cada ruta, esta logica es parte de la modularidad y logica MVC

app.listen( process.env.PORT || port, () => console.log(`Example App Listening on Port ${process.env.PORT}`) );

/*
Notas importantes:
1. El orden en que se ponen las sentencias importa, no puedes utilizar algo antes de tenerlo
2. req y res son abreviaciones de 'request' solicitud y 'response' respuesta, es como se gestionan los procesos puediendo agregar un parametro mas para procesos de callback, 'err' de error para la gestion de errores
3. Muchas de las palabras utilizadas aqui ya estan definidas, no debemos entenderlas sinno conocerlas, como 'use', 'limit', 'listen' son metodos o parametros ya definidos que podemos consultar en el catalogo de opciones y aprenderlas es mera cuestion de practica

*/