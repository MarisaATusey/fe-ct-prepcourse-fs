function esPar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es par.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 14 ---> true
  // 15 ---> false
  // Tu código:
  // npm test M5T15.test 
  if (num % 2 === 0) {
    return true 
  } else return false 
}

module.exports = esPar;
