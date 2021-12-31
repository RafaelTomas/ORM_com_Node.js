const express = require('express')

const pessoas = require('./pessoasRoutes')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')

module.exports = app => {
  app.use(
    express.json(),
    pessoas,
    niveis,
    turmas
    )


}