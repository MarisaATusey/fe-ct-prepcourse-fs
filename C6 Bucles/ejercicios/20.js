function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   var acumulador =1
   for ( i = 1; i <=n ; i++) {
      console.log (i)
   }
   if (i <=100){
      break
   }
   sumarHastaNConBreak()
}

module.exports = sumarHastaNConBreak;
