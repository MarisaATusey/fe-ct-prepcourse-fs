function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:

   let indiceAleatorio = Math.floor(Math.random() * array.length);
   return array[indiceAleatorio];
}

module.exports = obtenerElementoAleatorio;

//Este código define una función llamada obtenerElementoAleatorio 
//que recibe un arreglo como argumento.
//Dentro de la función, se genera un número aleatorio entre 0 (inclusive) 
//y la longitud del arreglo array (exclusivo) utilizando Math.random()
 //y multiplicándolo por la longitud del arreglo.
 //Luego, se redondea hacia abajo el número aleatorio obtenido con Math.floor() para obtener
 // un índice válido dentro del arreglo.
 //Finalmente, la función retorna el elemento del arreglo correspondiente al índice aleatorio generado, 
 //proporcionando así un elemento aleatorio del arreglo original.