const express = require('express')

const app = express()

app.use(express.json())

let port = process.env.PORT || 3000

app.get('/teste', (req, res) => res
    .status(200)
    .send({
        mensagem : 'Olá'
    })
    )
    

app.listen(port, () => console.log(`servidor esta rodando na porta ${port}`))

module.exports = app