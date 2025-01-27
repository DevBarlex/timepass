module.exports = (req, res, next) => {
    const horaActual = res.locals.horaActual; // Obtenemos la hora desde res.locals
  
    // Si la hora es menor que las 12:00, redirige con un mensaje de error
    if (horaActual < 20) {
      res.locals.mensaje = "Aún no son las 20 de la tarde, espera un poco más.";
      return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje)); // Redirige al inicio con el mensaje
    }
  
    next(); // Si la hora es correcta, continua con la ruta
  };


