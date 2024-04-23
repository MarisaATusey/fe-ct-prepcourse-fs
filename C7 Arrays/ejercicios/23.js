function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  //npm test m7t23.test.js

    let arr = [];
    let sum = num;
    for (let i = 0; i < 10; i++) {
      sum += 2;
      if (sum === i) {
        console.log ("Se interrumpió la ejecución");
        break
      }
      return arr.push(sum);
    }

  }


module.exports = breakStatement;
