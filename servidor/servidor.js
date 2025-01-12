const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
import mysql from "mysql2/promise";

const app = express();// se crea un Servidor con Express
const PORT = 3000;

app.use(express.json());// Middlewares
app.use(cors());        // Establecemos que funciones utilizara el servidor express creado


const db = mysql.createConnection({ // Configuración de la conexión a la base de datos
  host: 'localhost',                // Cambia por la IP o host de tu base de datos, ej 169.254.128.224
  user: 'root',                     // Tu usuario de MySQL
  password: 'password',             // Tu contraseña de MySQL
  database: 'educacion'             // Nombre de la base de datos
});

/*db.connect((err) => {// Objeto conexion - Alernativa con callback
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});*/

const connect = async () =>{  //opcion asincrona
	return await mysql.createConnection(db);//Crea conexion, utilizando las credenciales definidas
}

// Ruta para obtener el contenido educativo (GET)
app.get('/api/contenido', (req, res) => {
  const query = 'SELECT * FROM contenidos';
  connect.query(query, (err, results) => {  //utilizamos 'connect' y mandamos la consulta para ejecutarse
    if (err) {
      res.status(500).json({ error: 'Error al obtener el contenido' });
    } else {
      res.json(results);
    }
  });
});

// Ruta para postear nuevo contenido educativo (POST)
app.post('/api/contenido', (req, res) => {
  const { titulo, texto } = req.body;
  const query = 'INSERT INTO contenidos (titulo, texto) VALUES (?, ?)';
  connect.query(query, [titulo, texto], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error al insertar el contenido' });
    } else {
      res.json({ message: 'Contenido insertado con éxito' });
    }
  });
});

// Ruta para manejar el formulario de contacto (POST)
app.post('/api/contacto', (req, res) => {
  const { nombre, email, mensaje } = req.body;
  const query = 'INSERT INTO contacto (nombre, email, mensaje) VALUES (?, ?, ?)';
  connect.query(query, [nombre, email, mensaje], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error al enviar el mensaje' });
    } else {
      res.json({ message: 'Mensaje enviado con éxito' });
    }
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
