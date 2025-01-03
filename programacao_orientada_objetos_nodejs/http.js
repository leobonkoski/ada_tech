const http = require('http');

const sports = ['football', 'volley', 'basketball', 'tennis']


const server = http.createServer(async(request, response) =>{
    const {method, statusCode, url} = request

    request.headers.accept='*'
    request.headers.allow='*'

  

    const bodyPromise = new Promise((resolve, reject) =>{
        let body

        request.on('data', data=>{
            body= JSON.parse(data)
        })

        request.on('end', data=>{
            resolve(body)
        })
    }
)

    if(url === '/'){
        response.write("<div><h1>Hello from Node</h1><p>http server</p></div>");
        response.end();
        return
    }

    if(url === '/api/sports'){
        if (method ==='GET'){
            response.write(JSON.stringify(sports));
            response.end(); 
            return 
        }

        if (method ==='POST'){
            const body = await bodyPromise
            
            const { name } = body

            if(!sports.map(sports => sports.toLowerCase()).includes(name.toLowerCase())){
                sports.push(name.toLowerCase()) 
            }

            response.write(name.toLowerCase())
            response.end()
            return
           
     }
       
    }


    response.statusCode = 404
    response.write("<div><h1>Páagina não encontrada</h1></div>");
    response.end();
})

server.listen(3000, 'localhost', () =>{
    console.log(`server running on http://localhost:3000`)
})