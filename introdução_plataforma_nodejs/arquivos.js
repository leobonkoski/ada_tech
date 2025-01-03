const path = require('node:path');
const fs = require('node:fs');
const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.NODE_ENV)

const filePath = path.join(process.cwd(), 'introdução_plataforma_nodejs', 'texto.txt');
const fileOutPath = path.join(process.cwd(), 'introdução_plataforma_nodejs', 'texto_com_linhas.txt');

console.time("Manipular arquivos"); //medir o tempo de execução de determinada parte do código para fins de melhorar a otimização

fs.readFile(filePath, {}, (erro, dados) =>{
    if (erro){
        console.error(`Erro na leitura do arquivo ${filePath}`)
        return
    } 
    
    const texto = dados.toString();
    const linhas = texto.split('\n');

   // linhas.forEach((Linha, index, arrayDeLinhas) => console.log(`${index + 1} - ${Linha} `))
    //console.log(dados.toString());

    const linhasAjustadas = linhas.map((Linha, index, arrayDeLinhas) => (`${index + 1} - ${Linha} `))

    //fs.writeFile(fileOutPath)
    fs.writeFile(fileOutPath, linhasAjustadas.join("\n"), {}, (erro)=>{
        if (erro){
            console.error(`Erro na escrita do arquivo no caminho ${fileOutPath}`)
           
        } 
        console.log(`Arquivo salvo no bucket ${process.env.S3_BUCKET}`)
        console.timeEnd("Manipular arquivos")
        
    });
} )
