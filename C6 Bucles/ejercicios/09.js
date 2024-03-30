function conection(status) {
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:

switch (status) {
case 1:
  connectionStatus = "Online";
  break;
  case 2:
  connectionStatus = "Away";
  break;
  default:
  connectionStatus = "Offline";
}}

module.exports = conection;
//npm test m6t9.test.js 