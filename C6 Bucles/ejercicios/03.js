function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  // npm test M6T3.test
  if ( Number.isInteger(x) && Number.isInteger(x)
    && x > y )
  return x
  else return y
}

module.exports = obtenerMayor;
