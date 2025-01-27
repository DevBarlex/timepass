const express = require('express');
const app = express();
const path = require('path');

// Rutas
const indexRouter = require('./rutas/index');
const endrouteRouter = require('./rutas/endruote');

// Middlewares
const horaMiddleware = require('./middleware/horaMiddleware');
const validarHora = require('./middleware/validarHora');

// Configuración para usar vistas (si usas EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para obtener la hora actual
app.use(horaMiddleware);

// Rutas
app.use('/', indexRouter); // Ruta principal
app.use('/endroute', validarHora, endrouteRouter); // Ruta final, validada por hora

// Puerto del servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});