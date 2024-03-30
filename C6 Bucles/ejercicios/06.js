function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if (num >= 100 && num <= 999)
  return true
else
return false
}
// npm test m6t6.test.js 
module.exports = tieneTresDigitos;
