// Não é uma boa pratica utilizar o for in para percorrer array, ele é utilizado para percorrer objetos
// For in é usado para percorrer as propriedades de um objeto, retornando os índices de cada elemento.
// For of é usado para percorrer objetos iteráveis, como arrays e maps, retornando os elementos da lista

const user = {
  name: "JoSÉ mARIA SOUSA santos",
  email: "JOSE.MARIA@GMAIL.COM",
  age: 23,
  adress: "X street"
}; 

for(const key in user){
  if (key == "name"){
    const names = user[key].split(" "); //split transforma string em um array
    user[key]= "";

    for (const name of names){
      const normalizedName = name.toLowerCase();
      const [primeiraLetra, ...restoDoNome] = normalizedName;

      user[key] = user[key] + " " + primeiraLetra.toUpperCase()+ restoDoNome.join(""); //join transforma array numa string
      user[key] = user[key].trim();
    }

  }

  if (key === "email"){
    user[key] = user[key].toLowerCase();
  }



}

console.log(user);