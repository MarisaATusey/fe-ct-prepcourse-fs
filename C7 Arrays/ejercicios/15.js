function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var  max = Math.max(...array);
  return array.indexOf(max);
}
//let max = array[0];
//let index = 0;
  
//for (let i = 1; i < array.length; i++) {
  //if (array[i] > max) {
   // max = array[i];
   // index = i;
 // }

module.exports = encontrarIndiceMayor;
