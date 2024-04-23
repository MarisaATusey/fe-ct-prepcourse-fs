function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   //npm test m8ct6.test.js
      let filteredArray = [];
      for (let str of arrayOfStrings) {
       if (str.charAt(0) === 'a') {
          filteredArray.push(str);
        }
      }
     return filteredArray;

     //var resultado = arrayOfStrings.filter ((Elemento) => {
      //if (Elemento[0]=== "a") return Elemento
     //})
    }

module.exports = filter;
