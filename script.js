let str = "exemplo"; // string de exemplo
let reversed = ""; // string que vai armazenar a string invertida

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

console.log(reversed); // imprime "olpmexe"
