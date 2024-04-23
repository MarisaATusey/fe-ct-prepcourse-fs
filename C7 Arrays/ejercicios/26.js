function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  //npm test m7t26.test.js
  for (let num of secuencia) {
    if (num % n === 0) {
      return num;
    }
  }
  return "No se encontró ningún múltiplo de " + n;
}


module.exports = encontrarPrimerMultiploDeN;