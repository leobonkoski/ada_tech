// Quando estiver trabalhando com listas, de preferência ao For
// For in é usado para percorrer as propriedades de um objeto, retornando os índices de cada elemento.
// For of é usado para percorrer objetos iteráveis, como arrays e maps, retornando os elementos da lista

const listaNumeros = [1, 4,5,6,8,32,12,43];
const listaNomes = ["Carlos", "Manoel", "Jailson"];

// Código imperativo

console.log("Utilizando o for"); 
for (let contador = 0; contador < listaNumeros.length; contador+=1){
  console.log(listaNumeros[contador]);
}


// Código delcarativo (for of)

console.log("Utilizando o for of"); 

for (const numero of listaNumeros){
  console.log(numero); 
}

for (const nome of listaNomes){
  console.log(nome); 
}
