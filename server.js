// Vamos criar um servidor local HTTP

import http from "http"

const PORT = 3000 // Porta padrão ultilizada

const rotas = { 
    "/":"Te Amo meu amooooooooooor !!!!!!", // Ao acessar a URL base, ele vai exibir o valor da chave
    "/express":"Express ", // Ao acessar a URL base, ele vai exibir o valor da chave
    "/mongoDB":"Mongo DB" // Ao acessar a URL base, ele vai exibir o valor da chave
}

const server = http.createServer((req,res)=>{
    res.writeHead(200, {"Content-type":"text/plain"})
    res.end(rotas[req.url])
})

server.listen(PORT, ()=> {
    console.log("Voxe é meu mozinhoooooooo")

})

