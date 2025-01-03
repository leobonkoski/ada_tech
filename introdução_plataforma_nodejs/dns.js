const dns = require('node:dns'); // vai traduzir a url para um IP
const { resolve } = require('node:path');



/*const ipv4 = dns.resolve4(searchedURL, (error, addresses)=>{
if(error){
    console.log(`url não encontrada`)
    return
}
    console.log(addresses);
});*/


async function bootstrap() {

    const searchedURL= "google.com";

    console.time("Pesquisando URL por DNS padrão")
    const addresses =  await dns.promises.resolve4(searchedURL)
    console.timeEnd("Pesquisando URL por DNS padrão")
    console.log(addresses);

    const nameServers = await dns.promises.resolveNs(searchedURL)
    console.log(nameServers);

    const ipNs = await dns.promises.resolve4(nameServers[1])

    const resolver = new dns.Resolver();
   // resolver.setServers([ipNs ?? "ns1.google.com"] ); //?? testa o primeiro valor para ver se existe(diferente de null ou undefined), caso contrario utiliza o segundo valor
   resolver.setServers(ipNs);

    console.time("Pesquisando URL por DNS específico")
    resolver.resolve4(searchedURL, (error, adresses) =>{
        if (error){
            console.error("Não foi possível encontrar ipv4")
        }
        console.timeEnd("Pesquisando URL por DNS específico")
        console.log(adresses);
     
    });
   
    
}

bootstrap()
