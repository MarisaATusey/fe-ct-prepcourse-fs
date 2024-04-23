function operacionMatematica(num1, num2, cb) {
  // En este ejercicio recibirás dos números y un callback.
  // El callback realiza una operación matemática, por lo que necesita de los dos números.
  // Retorna el resultado del callback pasándole por valores los números num1 y num2.
  // Tu código:
    // Verificamos que el callback sea una función antes de ejecutarla.
    if (typeof cb === 'function') {
      // Retornamos el resultado de la operación matemática realizada por el callback.
      return cb(num1, num2);
    } else {
      // Si cb no es una función, podríamos lanzar un error o simplemente no hacer nada.
      // Eso dependerá de cómo quieras manejar esta situación en tu código.
      throw new Error('El callback proporcionado no es una función');
    }
  }

module.exports = operacionMatematica;
