// == Não compara tipos, ele faz coersões implicitas, por exemplo tratando 20 e "20" como iguais. O ideal é usar === que compara valor e tipo


const number1 = 20;
const number2 = 2;
const string_number = "20";

if (number1 > number2){
  console.log(`${number1} é maior que ${number2} `);
}else{
  console.log(`${number1} é menor que ${number2} `);
}

if (number1 == string_number){
  console.log(`${number1} e ${string_number} são iguais em valores, mas pode ter ocorrido coersão implicita pelo uso da condicional == `);
}

if (number1 === string_number){
  console.log(`${number1} e ${string_number} são iguais em valores e são do mesmo tipo `);
}
  
  
