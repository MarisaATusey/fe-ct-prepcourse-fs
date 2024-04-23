function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
     // Utilizamos el método 'reduce' para sumar todos los elementos del arreglo.
    // npm test m8ct3.test.js
function sumarNumeros(acumulador, elemento){
  acumulador = acumulador + elemento
  return acumulador
}
var resultado =arrayOfNumbers.reduce(sumarNumeros)
console.log (resultado)
cb(resultado)
}






//var acumuladorSuma = 0
//for (var i = 0; i < array.length; i++) {
  //acumuladorSuma = acumuladorSuma + arrayOfNumbers[i];
  //}
//console.log (acumuladorSuma)
//}

module.exports = sumarArray;
