import { createInterface } from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';


const prompt = createInterface({
  input: process.stdin, //input de dados pelo tecladod
  output: process.stdout //output padrao de dados pelo terminal
});


//callback =>()codigo que sera executada após alguma outra função dentro do método
//prompt.question("Qual o seu número favorito? ", (resposta)=> {
//console.log(`O seu número favorito é ${resposta} e o dobro dele é ${parseInt(resposta)*2}`);
//prompt.close();
//});

const promptPromise = {
  question: (pergunta) => new Promise((resolve, reject) => {
    try {
      prompt.question((pergunta), (respota) => resolve(respota));
    } catch(error){
      reject(error);
    }


  }),
  close: () => prompt.close() 
};


async function  askUser() {
  const number = await promptPromise.question ("Qual o seu número favorito? ");
  console.log(`O seu número favorito é ${number} e o dobro dele é ${parseInt(number)*2}`);
  const color = await promptPromise.question ("Qual a sua cor favorita? ");
  console.log(`A sua cor favorita é ${color}`);
  promptPromise.close;
    
}


askUser();
