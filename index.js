//import express from 'express';
//import { getClinica } from './routes/clinica.routes.js'; // Asegúrate de que esta ruta sea correcta



//const app = express();
//const port = 3000;

// Ruta para insertar usuario y obtener registros
//app.get('/usuarios', getClinica);

;

//app.listen(port, () => {
  //console.log(`Servidor corriendo en http://localhost:${port}`);
//});
////////////////
//import express from 'express';
//import bodyParser from 'body-parser';
//import clinicaRoutes from './routes/clinica.routes.js';
//import usuarioRoutes from './routes/usuario.routes.js';

//const app = express();
//const port = 3000;

//app.use(bodyParser.json());

//app.use('/api', clinicaRoutes);
//app.use('/api', usuarioRoutes);

//app.listen(port, () => {
  //console.log(`Servidor corriendo en http://localhost:${port}`);
//});

///////////////////////////////
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';  // Importa cors
import { getClinica } from './controller/clinica.controller.js';
import usuarioRoutes from './routes/usuario.routes.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());  // Usa cors

// Configura Express para servir archivos estáticos desde la carpeta raíz
app.use(express.static(path.join(__dirname, '../')));

app.use('/api', usuarioRoutes);
app.get('/usuarios', getClinica);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
