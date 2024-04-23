function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  if (resultadosTest.length === 0) {
    return 0;
  }
  
  const sum = resultadosTest.reduce((acc, nota) => acc + nota, 0);
  return sum / resultadosTest.length;
}

module.exports = promedioResultadosTest;
