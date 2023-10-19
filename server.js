// Vamos criar um servidor local HTTP
// import http from "http"
import app from "./src/app.js"


const PORT = 3000 // Porta padrão ultilizada

app.listen(PORT, ()=> {
    console.log("Tá na escuta pâe")

})

