function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:
   // npm test m6t25.test.js

    var palabra = string.replace(/ /g,"").toLowerCase(); //(/ /g,"") significa borrar espacios vacios
    var j = palabra.length-1; // no olvidad var j 
    for (let i = 0; i < array.length; i++) {
  if( palabra[i]!== palabra[j]) return false;
  j--;} 
  return true;
}
module.exports = esPalindromo;
