function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:
  // npm test M6T1.test
  if ( a === b && b < 0 )
    return true 
  else return false 
}

module.exports = esIgualYNegativo;
