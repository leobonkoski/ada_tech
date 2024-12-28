// Em comparação com o While, o Do While irá percorrer o looping pelo menos uma vez

const listaNomes = ["Carlos", "Luiz", "Zeca", "Maria", "Joana", "Amelia"];
// const listaNomes = [];
let encontraUsuarioOuPercorreLista = false;
let indiceUsuario = 0;

do{
  const usuarioAtual = listaNomes[indiceUsuario];
  if(usuarioAtual && usuarioAtual.startsWith("Z")){
    encontraUsuarioOuPercorreLista = true;
    console.log(`Usuario encontrado: ${usuarioAtual}`);

  }
  indiceUsuario +=1;

  if(indiceUsuario >= listaNomes.length){
    encontraUsuarioOuPercorreLista=true;
    console.log("Usuario não foi encontrado");

  }
}while(!encontraUsuarioOuPercorreLista);