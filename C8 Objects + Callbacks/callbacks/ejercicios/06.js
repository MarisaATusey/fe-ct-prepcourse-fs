function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Creamos un nuevo arreglo para guardar los resultados.
  //npm test m8ct6.test.js

  //repuesta uno
  //var nuevoArray = [];
  // Iteramos sobre cada elemento del arreglo original.
  //for (var i = 0; i < array.length; i++) {
    // Ejecutamos el callback con el elemento actual y guardamos el resultado en el nuevo arreglo.
   // nuevoArray.push(cb(array[i]));
  //}
  // Retornamos el nuevo arreglo con los resultados.
  //return nuevoArray;}

  //soluicion 2 

 var nuevoArray = array.map((Elemento) => {
  return cb (Elemento)
   })
   return nuevoArray
}

module.exports = map;
