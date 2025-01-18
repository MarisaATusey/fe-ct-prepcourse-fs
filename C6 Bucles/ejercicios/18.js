function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
 // npm test M6T18.test
 var acum = 1
  for (var i = a; i <=b ; i ++){
    if (i === -0)
      return 0
     acum = acum * i
  }
return acum
}
module.exports = productoEntreNúmeros;