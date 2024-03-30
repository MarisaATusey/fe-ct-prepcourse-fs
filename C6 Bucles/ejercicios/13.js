function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
  if (Number.isInteger(num)){
    return true
  }   if (num % 1 != 0){
    return false
  } else false

}

module.exports = esEntero;
//npm test m6t13.test.js 