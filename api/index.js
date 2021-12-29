const express = require('express')
const routes = require('./routes/index')

const app = express()
let port = process.env.PORT || 3000

routes(app)

app.listen(port, () => console.log(`servidor esta rodando na porta ${port}`))

module.exports = app