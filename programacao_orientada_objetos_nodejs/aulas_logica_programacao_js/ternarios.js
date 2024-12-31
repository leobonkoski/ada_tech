const temCNH = true;
const idade = 19;

let podeDirigir = idade >=18 && temCNH;

if(podeDirigir){
  console.log ("true, então pode dirigir");
}else {
  console.log ("false, então não pode dirigir");
}

// Calculando numero de passageiros utilizando o resultado do IF acima em um operador ternári com base se a pessoa pode ou não dirigir

const numeroPassageiros = podeDirigir ? 4 : 0;

console.log(`Numero de passageiros: ${numeroPassageiros}`);
