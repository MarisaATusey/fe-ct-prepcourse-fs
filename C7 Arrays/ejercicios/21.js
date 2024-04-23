function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  
    const mesesPedidos = array.filter(mes => mes === 'Enero' || mes === 'Marzo' || mes === 'Noviembre');
    
    if (mesesPedidos.length === 3) {
      return mesesPedidos;
    } else {
      return "No se encontraron los meses pedidos";
    }
}

module.exports = mesesDelAño;
