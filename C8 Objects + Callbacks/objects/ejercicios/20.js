function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  // npm test M8OT20.test.js
  var arrayDePost = objetoUsuario
  var acumulador= 0
  for (var i = 0; i < arrayDePost.length; i++) {
    acumulador = acumulador + arrayDePost[i].likes
  }
return acumulador
}
//razonamiento
//objetoUsuario.posts = [
//( likes: 2) , 
//( likes: 5) , 
//( likes: 4) , 
//( likes: 6) 
module.exports = sumarLikesDeUsuario;
