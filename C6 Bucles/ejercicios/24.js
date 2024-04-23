function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
   // npm test m6t24.test.js
return texto.split('').reverse().join('');
}
module.exports = invertirTexto;

//En esta implementación:

//Utilizamos el método split('') para convertir el string texto en un array de caracteres.// h, o , l, a
//Luego, aplicamos el método reverse() para invertir el orden de los elementos en el array. //a, l, o, h
//Finalmente, utilizamos el método join('') para unir los caracteres del array invertido en un string nuevamente.//aloh
//Esta implementación es más concisa y utiliza los métodos de manipulación de strings disponibles en JavaScript
// para invertir el string de forma más directa.