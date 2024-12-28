const listaNumeros = [2,32,5,21,56,42,54,294,245,567,4564,230540];
const listaPares = [];
const listaImpares = [];

let indiceNumero = 0;

while (indiceNumero < listaNumeros.length){
  if(listaNumeros[indiceNumero] % 2 === 0 ){
    listaPares.push(listaNumeros[indiceNumero]);

  }else{
    listaImpares.push(listaNumeros[indiceNumero]);

  }
  indiceNumero+=1;

}

console.log(`Números pares: ${listaPares}`);
console.log(`Números ímpares: ${listaImpares}`);



const listaNomes = ["Carlos", "Luiz", "Zeca", "Maria", "Joana", "Amelia"];
let encontraUsuarioOuPercorreLista = false;
let indiceUsuario = 0;

while(!encontraUsuarioOuPercorreLista){
  const usuarioAtual = listaNomes[indiceUsuario];
  if(usuarioAtual.startsWith("Z")){
    encontraUsuarioOuPercorreLista = true;
    console.log(`Usuario encontrado: ${usuarioAtual}`);

  }
  indiceUsuario +=1;

  if(indiceUsuario === listaNomes.length){
    encontraUsuarioOuPercorreLista=true;
    console.log("Usuario não foi encontrado");

  }
}