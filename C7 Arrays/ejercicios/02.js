function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código;
  return array.slice(-1)[0];
}
  //return array[array.length - 1];

module.exports = devolverUltimoElemento;

//array.slice(-1): Este método devuelve una nueva matriz que contiene 
//los elementos a partir de la posición indicada en el parámetro. 
//Al pasar -1 como argumento, 
//se indica que se debe devolver el último elemento del arreglo array.
//[0]: Al final de la expresión array.slice(-1), se accede al primer elemento
// de la nueva matriz creada, 
//que en este caso es el último elemento del arreglo original array.
//De esta forma, la función devolverUltimoElemento(array)
//devuelve el último elemento del arreglo recibido utilizando 
//métodos de arrays en JavaScript.