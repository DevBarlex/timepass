module.exports = (req, res, next) => {
    const horaActual = new Date().getHours(); // Obtiene la hora actual
    res.locals.horaActual = horaActual; // Lo guardamos en res.locals para usarlo en las vistas
    next();
  };