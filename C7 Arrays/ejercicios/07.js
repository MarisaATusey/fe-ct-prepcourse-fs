function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  return array.sort((a, b) => a - b)
}
module.exports = ordenarArray;

//La función sort recibe una función de comparación como argumento,
// que compara dos elementos a y b. La expresión a - b devuelve un número
// negativo si a es menor que b, cero si son iguales, o un número positivo 
//si a es mayor que b. Por lo tanto, al utilizar a - b como función de comparación,
//el método sort ordenará los elementos de menor a mayor.
