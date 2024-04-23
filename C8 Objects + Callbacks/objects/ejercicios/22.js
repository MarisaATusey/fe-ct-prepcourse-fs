function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   ////npm test m8Ot22.test.js
   var str1Ordenado = str1.ToLowerCase.split("").sort().join("")
   var str2Ordenado = str2.ToLowerCase. split("").sort().join("")
   return str1Ordenado === str2Ordenado
   }

//esAnagrama ("gato","topa")