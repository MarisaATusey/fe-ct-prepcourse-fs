function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:

    const fechaObj = new Date(fecha);
  
    const esValida = fechaObj.getDate() == fechaObj.getDate() &&
                    fechaObj.getMonth() == fechaObj.getMonth() &&
                    fechaObj.getFullYear() == fechaObj.getFullYear();
    
    return esValida;
  }
  
 // console.log(esFechaValida('2022-12-31')); // true
 // console.log(esFechaValida('2022-02-30'));


module.exports = esFechaValida;