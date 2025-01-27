const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Obtén la hora desde res.locals (esto es pasado por el middleware horaMiddleware)
  const horaActual = res.locals.horaActual;
  
  // Muestra el mensaje o el mensaje de error si está presente
  const mensaje = req.query.mensaje || `Bienvenido, la hora actual es: ${horaActual} horas.`;

  // Pasa horaActual al renderizar la vista
  res.render('index', { mensaje, horaActual });
});

module.exports = router;