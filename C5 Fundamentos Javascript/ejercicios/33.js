function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
    if (numero <= 1) {
      return false;
    }
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
//En la función esNumeroPrimo(numero), se verifica si el número ingresado es primo siguiendo los siguientes pasos:
//Se comprueba si el número es menor o igual a 1, en cuyo caso no se considera primo y se retorna false.
//Se itera desde 2 hasta un número anterior al número ingresado (numero - 1), verificando si el número es divisible por algún otro número en ese rango.
//Si se encuentra un número en ese rango por el cual el número ingresado es divisible, entonces no es primo y se retorna false.
//Si no se encuentra ningún número en ese rango por el cual el número ingresado sea divisible, entonces es primo y se retorna true.
//De esta forma, la función determina si el número ingresado es primo o no.
module.exports = esNumeroPrimo;
