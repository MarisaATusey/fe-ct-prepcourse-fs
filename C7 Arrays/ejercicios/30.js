function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let elementos = {};
  for (let i = 0; i < numeros.length; i++) {
    if (elementos[numeros[i]] !== undefined) {
      return numeros[i];
    } else {
      elementos[numeros[i]] = true;
    }
  }
  
  return null;
}



module.exports = encontrarElementoRepetido;