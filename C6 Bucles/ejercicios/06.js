function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  //npm test M6T6.test
  if (num.toString ().length ===3)
    return true
  else return false 
}

module.exports = tieneTresDigitos;
