const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  //npm test m8ct8.test.js
    // Iteramos sobre el array para buscar el elemento.
    for (var i = 0; i < array.length; i++) {
      // Si el callback retorna true, significa que encontramos el elemento y lo retornamos.
      if (callback(array[i])) {
        return array[i];
      }
    }
    // Si terminamos de iterar y no se encontró el elemento, devolvemos el mensaje.
    return "No se encontró el elemento";
};

module.exports = buscarElemento;
