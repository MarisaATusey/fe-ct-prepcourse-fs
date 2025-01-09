function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
 // npm test M6T18.test
 var acum = 1
  for (var i = a; i > b ; i ++)
     acum =  acum *i+1
 }
return acum
module.exports = productoEntreNúmeros;