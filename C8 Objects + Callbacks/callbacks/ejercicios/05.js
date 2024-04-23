function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
  //npm test m8ct5.test.js
  
   // Iteramos sobre el arreglo con un bucle 'for'.
  //for (let i = 0; i < array.length; i++) {
    // Ejecutamos el callback pasando el elemento actual del arreglo.
   // cb(array[i]);
 // }
 array.forEach((Elemento) => {
cb (Elemento)
 })
}

module.exports = forEach;
