import express from "express";

const app  = express()
app.use(express.json()) //Ajuda a trabalhar com dados JSON nas solicitações HTTP

const livros = [
    {
        id:1,
        titulo: "A Arte de Pensar Claramente"
    },
    {
        id:2,
        titulo:"Codigo Limpo"
    }
]

function buscaLivro(id){
    return livros.findIndex(livro=>{
        return livro.id === Number(id)
    })
}
app.get("/", (req,res)=>{
    res.status(200).send("Aaaa zé da manga")
})
app.get("/livros", (req,res)=>{
    res.status(200).json(livros)
})

app.get("/livros/:id", (req, res)=>{
    const index = buscaLivro(req.params.id)
    res.status(200).json(livros[index])

})

app.post("/livros", (req,res)=>{
    livros.push(req.body)
    res.status(201).send("Livro cadastrado com sucesso")
})

export default app