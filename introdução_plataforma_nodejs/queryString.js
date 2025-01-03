const queryString = require("node:querystring")
const url = require("node:url")

const baseUrl = "https://siteviagem.com.br"

const uri = queryString.stringify({
    destino: 'Rio de Janeiro',
    periodo: 'Verão'
})

const fullUrl = `${baseUrl}/${uri}`

console.log(fullUrl);

const parsedUri = queryString.parse(uri)
console.log(uri)
console.log(parsedUri.destino)
console.log(url.parse(fullUrl))

/*const uri2 = queryString.escape('São Paulo')
console.log(uri2)
const unescapedUri2 = queryString.unescape(uri2)
console.log(unescapedUri2)*/
